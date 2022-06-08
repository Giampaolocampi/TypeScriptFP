import * as E from "fp-ts/Either"
import { pipe } from "fp-ts/function"

function safeDivision(a: number, b: number): E.Either<Error, number> {
    return (b === 0) ?
        E.left(new Error("Oups divide by zero is not allowed")) :
        E.right(a / b)
}

const getResult = (e: E.Either<Error, number>) =>
    E.fold(
        (_: Error) => _.message.toUpperCase(),
        (_: number) => _.toString()
    )(e)

console.log(
    pipe(
        safeDivision(10, 5), // right(2)
        E.map<number, number>(_ => _ * 10), // right(20)
        getResult // 20
    )
)

console.log(
    pipe(
        safeDivision(10, 5), // right(2)
        E.map<number, number>(_ => _ * 10), // right(20)
        E.chain<Error, number, number>(_ => safeDivision(_, 0)), //left(Error("Oups divide by zero is not allowed"))
        getResult // OUPS DIVIDE BY ZERO IS NOT ALLOWED
    )
)