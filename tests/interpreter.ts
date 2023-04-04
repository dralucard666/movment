import chai, { expect } from "chai"
import chaiAsPromised from "chai-as-promised"
import {
    applyChangeToMatrix,
    ChangeType,
    interprete,
    Matrix,
    parse,
    shallowEqual,
    simpleExecution,
    toArray,
    toValue,
    Value,
} from "../src"
import {
    asyncScheduler,
    EMPTY,
    filter,
    lastValueFrom,
    map,
    of,
    scheduled,
    take,
    tap,
    timer,
    toArray as collectInArray,
} from "rxjs"
import { wrap } from "comlink"
import { operations } from "../src/domains/movement"
chai.use(chaiAsPromised)

describe("matrix datastructure", () => {
    it("should handle changes and update matrix", () => {
        let matrix: Matrix<number> = undefined
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.SET,
            index: [],
            value: 22,
        })
        expect(matrix).to.deep.equal(22)
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.SET,
            index: [2],
            value: 7,
        })
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.SET,
            index: [4],
            value: 3,
        })
        expect(matrix).to.deep.equal([undefined, undefined, 7, undefined, 3])
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.UNSET,
            index: [4],
        })
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.SET,
            index: [0, 1],
            value: 4,
        })
        expect(matrix).to.deep.equal([[undefined, 4], undefined, 7])
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.UNSET,
            index: [2],
        })
        expect(matrix).to.deep.equal([[undefined, 4]])
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.UNSET,
            index: [0, 0],
        })
        expect(matrix).to.deep.equal([[undefined, 4]])
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.UNSET,
            index: [0],
        })
        expect(matrix).to.deep.equal(undefined)
        matrix = applyChangeToMatrix(matrix, {
            type: ChangeType.SET,
            index: [1, 0],
            value: 4,
        })
        expect(matrix).to.deep.equal([undefined, [4]])
    })
})

/*  describe("array datastructure", () => {
    it("should handle changes from observable and output the updated array", async () => {
         expect(
            
                scheduled<Value<number>>(
                    [
                        {
                            raw: 4,
                            index: [0],
                            invalid: createInvalidAndInvalidateAfter(100),
                            variables: {},
                            symbolDepth: {},
                        },
                        {
                            raw: 3,
                            index: [1, 0],
                            invalid: createCompletedInvalid(),
                            variables: {},
                            symbolDepth: {},
                        },
                        {
                            raw: 2,
                            index: [1, 1],
                            invalid: createInvalidAndInvalidateAfter(200),
                            variables: {},
                            symbolDepth: {},
                        },
                        {
                            raw: 1,
                            index: [10],
                            invalid: createCompletedInvalid(),
                            variables: {},
                            symbolDepth: {},
                        },
                        {
                            raw: 2,
                            index: [10, 0],
                            invalid: createCompletedInvalid(),
                            variables: {},
                            symbolDepth: {},
                        },
                    ],
                    asyncScheduler
                ).pipe(
                    toArray(),
                    map((values) => values.map(({ raw, index, variables }) => ({ raw, index, variables })))
                )
            )
        ).to.deep.equal([
            {
                raw: 3,
                index: [1, 0],
                variables: {},
            },
            {
                raw: 2,
                index: [10, 0],
                variables: {},
            },
        ])
    })
})  */

describe("interprete grammar", () => {
    it("should interprete sequential execution", async () => {
        //let result
        self.onmessage = (e) => {
            if (e.data.type) {
                if (e.data.type == "result") {
                    console.log(e.data.data)
                }
            }
        }

        await interprete([toValue(4, undefined, [])], parse(`a --> 10 -> this * 10 -> this + 1`), operations, {}, 0, 0)

        //expect(result).to.deep.equal([101])
    })

    /*     it("should interprete parallel execution", async () => {
        const result = interprete([toValue(1)], parse(`a --> 1 | 2 * 3 | 2 -> 4 * 2`), {}, {})?.map((v) => v.raw)
        expect(result).to.deep.equal([1, 6, 8])
    })

    it("should interprete operation execution with one result and without including this parameter", async () => {
        const result = interprete(
            [toValue(1 as unknown as string)],
            parse(`a --> 1 | 2 * 3 | op1(3+3, "Hallo" + " Welt") | op1(2)`),
            {
                op1: {
                    execute: simpleExecution<any>((num: number, str: any) => [`${str ?? ""}${num * num}`]),
                    includeThis: false,
                    defaultParameters: [],
                    changesTime: false,
                },
            },
            {}
        )?.map((v) => v.raw)
        expect(result).to.deep.equal([1, 6, "Hallo Welt36", "4"])
    })

    it("should interprete operation execution with multiple results and with including this as parameter", async () => {
        const result = interprete(
            [toValue(22)],
            parse(`a --> 1 | 2 * 3 | op1(3+3, "Hallo" + " Welt") | op1(2)`),
            {
                op1: {
                    execute: simpleExecution((current: number, num: number, str: any) => [current, str, num * num]),
                    includeThis: true,
                    defaultParameters: [],
                    changesTime: false,
                },
            },
            {}
        )?.map((v) => v.raw)
        expect(result).to.deep.equal([1, 6, 22, "Hallo Welt", 36, 22, undefined, 4])
    })

    it("should interprete grammars with recursion (that eventually terminate)", async () => {
        const result = interprete(
            [toValue(4)],
            parse(`a --> if this == 0 then { 0 } else { 1 | this - 1 -> a }`),
            {},
            {}
        )?.map((v) => v.raw)

        expect(result).to.deep.equal([1, 1, 1, 1, 0])
    }).timeout(5000) */

    /*     it("should not throw an error caused by recursion since a return is used before the recursion", async () => {
        const result = interprete([toValue(22)], parse(`a --> return -> a`), {}, {})?.map((v) => v.raw)

        expect(result).to.deep.equal([22])
    }) */

    /*     it("should interprete complex grammars", async () => {
        const result = interprete(
            [toValue(0)],
            parse(
                `   a --> 2 -> switch this { case 2: b case 3: c }
                b --> if true then { this * 10 -> c } else { c }
                c --> (20 * d | d) -> return -> 100
                d --> this / 2 -> this * 2`
            ),
            {},
            {}
        )?.map((v) => v.raw)

        expect(result).to.deep.equal([400, 20])
    }) 

    it("should interprete complex grammar with delays", async () => {
        const result = interprete(
            [toValue(0)],
            parse(
                `   a --> 2 -> switch this { case 2: b case 3: c }
                b --> if true then { this * 10 -> c } else { c }
                c --> (20 * d | d) -> return -> 100
                d --> this / 2 -> this * 2`
            ),
            {},
            {
                delay: 20,
            }
        )?.map((v) => v.raw)
        expect(result).to.deep.equal([400, 20])
    })*/

    /*     it("should throw an error with unterminating recursive grammars", async () => {
        const result = interprete(
            [toValue(1)],
            parse(`a --> 1 | 10 -> a | 2`),
            {},
            {
                maxSymbolDepth: 50,
            }
        )?.map((v) => v.raw)
        expect(result).to.be.rejectedWith(`maximum symbol depth (50) reached for symbol "a"`)
    }) */

    /*     it("should throw an error with direct referecing unterminating recursive grammars", async () => {
        const result = interprete([toValue(1)], parse(`a --> a`), {}, {})?.map((v) => v.raw)
        expect(result).to.be.rejectedWith(`maximum symbol depth (50) reached for symbol "a"`)
    }) */

    /*     it("should throw an error when using unknown symbol", async () => {
        const result = interprete([toValue(1)], parse(`a --> 1 | 10 -> b | 2`), {}, {})?.map((v) => v.raw)
        expect(result).to.be.rejectedWith(`unknown symbol "b"`)
    }) */

    /*     it("should should interprete random based on seed", async () => {
        const seeds = [4, 8, 3, 50, 50]
        const description = parse(`a --> { 25%: 1 25%: 2 25%: 3 25%: 4 }`)
        const results: Array<number> = []

        for (const seed of seeds) {
            //results.push(...interprete([toValue(1)], description, {}, { seed })?.map((v) => v.raw))
            const result = interprete([toValue(1)], description, {}, { seed })?.map((v) => v.raw)
            if (result != null) {
                results.push(...result)
            }
        }
        expect(results).to.deep.equal([1, 2, 3, 4, 4])
    }) */

    /*     it("should re-interprete complex grammar with changing values", async () => {
        const values = new Array(100).fill(null).map((_, i) => i)
        const expected = values.map((v) => {
            const c = [20 * v, v]
            const b = v === 1 ? [200 * v, 10 * v] : [...c]
            const a = [...c, ...b]
            return a
        })

        const result = timer(50, 50).pipe(
            take(values.length),
            map((v) => values[v]),
            toValue(),
            interprete(
                parse(
                    `   a --> c | b
                        b --> if this == 1 then { this * 10 -> c } else { c }
                        c --> (20 * d | d) -> return -> 100
                        d --> this / 2 -> this * 2`
                ),
                {},
                {}
            ),
            toArray(),
            filter((values) => values.length === 4),
            map((values) => values.map(({ raw }) => raw)),
            collectInArray()
        )
        const results =  result

        expect(results.length).to.be.greaterThan(10)

        let resultsIndex = 0
        for (let i = 0; i < expected.length; i++) {
            if (shallowEqual(expected[i], results[resultsIndex])) {
                ++resultsIndex
            }
        }
        const unmatchedResult = results[resultsIndex]

        expect(unmatchedresult.to.be.undefined
    }).timeout(10000) */

    /*     it("should handle external variable changes", async () => {
        const values = new Array(100).fill(null).map((_, i) => i)
        const expected = values.map((v) => [v * 5, 2 + v])
        const result = of<Value<number>>({
            raw: 0,
            invalid: createCompletedInvalid(),
            index: [],
            variables: {
                x: timer(50, 50).pipe(
                    take(values.length),
                    map((v) => values[v])
                ),
            },
            symbolDepth: {},
        }).pipe(
            interprete(
                parse(` a --> this.x * b | 2 + this.x
                        b --> 3 + 2`),
                {},
                {}
            ),
            toArray(),
            filter((values) => values.length === 2),
            map((values) => values.map(({ raw }) => raw)),
            collectInArray()
        )

        const results = result
        expect(results.length).to.be.greaterThan(10)
        expect(() => {
            let resultsIndex = 0
            for (let i = 0; i < expected.length; i++) {
                if (shallowEqual(expected[i], results[resultsIndex])) {
                    ++resultsIndex
                }
            }
            const unmatchedResult = results[resultsIndex]
            if (unmatchedResult != null) {
                throw new Error(
                    `unexpected result ${JSON.stringify(unmatchedResult)} at result index ${resultsIndex} of ${
                        results.length
                    } results `
                )
            }
        }).to.not.throw()
    }).timeout(10000) */

    /*     it("should throw an error when using unknown operator", async () => {
        const result = interprete([toValue(1)], parse(`a --> 1 | 10 -> drive() | 2`), {}, {})?.map((v) => v.raw)
        expect(result).to.be.rejectedWith(`unknown operation "drive"`)
    }) */

    //TODO: test attribute changes
    //TODO: test operation value change (or switch operation result to promise?)
})
