import { HierarchicalParsedSteps, ParsedSteps, HierarchicalParsedGrammarDefinition, Operations } from ".."
import { EditorState, SelectionPattern } from "."
import { ValueMap, SelectionsList } from "./selection"
import { computeDependencies, toHierarchical } from "../util"
import produce from "immer"
import { replaceOnDraft, ReplaceWith } from "./replace"
import { AbstractParsedSteps } from "../parser"
import { removeUnusedNouns } from "./noun"

function getNeutralStep(
    parent: HierarchicalParsedSteps | HierarchicalParsedGrammarDefinition,
    childIndex: number | string,
    operations: Operations<any, any>
): ParsedSteps | undefined {
    if (Array.isArray(parent) || typeof childIndex == "string") {
        return {
            type: "this",
        }
    }
    switch (parent.type) {
        case "operation": {
            const operation = operations[parent.identifier]
            if (operation == null) {
                break
            }
            const defaultParameterGenerator = operation.defaultParameters[childIndex]
            if (defaultParameterGenerator == null) {
                return {
                    type: "null",
                }
            }
            return defaultParameterGenerator()
        }
        case "sequential":
            return { type: "this" }
        case "parallel":
        case "random":
            return {
                type: "null",
            }
        case "switch":
            if (childIndex === 0) {
                break
            }
            return { type: "null" }
        case "if":
            if (childIndex === 0) {
                break
            }
            return { type: "null" }
    }
    return undefined
}

export async function removeStep<T, A>(
    valueMap: ValueMap<T, A>,
    selectionsList: SelectionsList<T, A>,
    patterns: Array<SelectionPattern<T, A>>,
    selectCondition: (conditionSteps: Array<ParsedSteps>) => Promise<ParsedSteps | undefined>,
    operations: Operations<any, any>,
    grammar: HierarchicalParsedGrammarDefinition
): Promise<EditorState> {
    const replaceWith: ReplaceWith = (_, path, translatedPath) =>
        getNeutralStep(translatedPath[translatedPath.length - 2], path[path.length - 1], operations)
    const newGrammar = await produce(grammar, async (draft) => {
        await replaceOnDraft(valueMap, selectionsList, patterns, selectCondition, replaceWith, draft)
        simplfyGrammarOnDraft(draft)
        return toHierarchical(draft)
    })
    const partial = removeUnusedNouns(newGrammar, [])
    return {
        ...partial,
        dependencyMap: computeDependencies(partial.grammar),
        valueMap: {},
        hovered: undefined,
    }
}

function simplfyGrammarOnDraft(grammar: HierarchicalParsedGrammarDefinition): void {
    for (const noun of grammar) {
        noun.step = simplifyStepOnDraft(noun.step)
    }
    toHierarchical(grammar)
}

function simplifyStepOnDraft<T>(step: AbstractParsedSteps<T>): AbstractParsedSteps<T> {
    if (step.children == null) {
        return step
    }
    for (let i = step.children.length - 1; i >= 0; i--) {
        if (!deleteUnnecassaryStepChildOnDraft(step, i)) {
            step.children[i] = simplifyStepOnDraft(step.children[i])
        }
    }
    return simplifyStepItselfOnDraft(step)
}

function simplifyStepItselfOnDraft<T>(step: AbstractParsedSteps<T>): AbstractParsedSteps<T> {
    if ((step.type === "parallel" || step.type === "sequential") && step.children.length === 1) {
        return step.children[0]
    }
    return step
}

/**
 * @returns true if the child was deleted
 */
function deleteUnnecassaryStepChildOnDraft<T>(
    parent: AbstractParsedSteps<T> & { children: Array<AbstractParsedSteps<T>> },
    childIndex: number
): boolean {
    const child: AbstractParsedSteps<T> | undefined = parent.children[childIndex]
    if (child == null) {
        return false
    }
    switch (parent.type) {
        case "sequential":
            if (child.type !== "this" || parent.children.length === 1) {
                return false
            }
            break
        case "parallel":
            if (child.type !== "null" || parent.children.length === 1) {
                return false
            }
            break
        case "random":
            if (child.type !== "null") {
                return false
            }
            parent.probabilities.splice(childIndex, 1)
            break
        case "switch":
            if (childIndex === 0) {
                return false
            }
            if (child.type !== "null") {
                return false
            }
            parent.cases.splice(childIndex - 1, 1)
            break
        default:
            return false
    }
    parent.children.splice(childIndex, 1)
    return true
}
