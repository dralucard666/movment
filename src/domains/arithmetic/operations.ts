import { map } from "rxjs"
import { toArray, Operation, toChanges, InterpretionValue, maxEventDepth } from "../.."

//TODO: check dependencies
//TODO: caching

const sum: Operation<number> = (values) =>
    toChanges(
        toArray(values, 100).pipe(
            map((values) => {
                console.log("sum", ...values)
                return [
                    values.reduce<InterpretionValue<number>>(
                        (prev, cur) => {
                            prev.value += cur.value
                            maxEventDepth(prev.eventDepthMap, cur.eventDepthMap)
                            return prev
                        },
                        { eventDepthMap: {}, value: 0 }
                    ),
                ]
            })
        )
    )

export const operations = {
    sum,
}
