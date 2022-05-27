import { pipe } from 'fp-ts/function'
import * as N from 'fp-ts/number'
import { Ord } from 'fp-ts/Ord'

const sort = <A>(O: Ord<A>) => (
    as: ReadonlyArray<A>): ReadonlyArray<A> => as.slice().sort(O.compare)  //utilizza il metodo slice per partire dal primo elemento

pipe([3, 2, 1], sort(N.Ord), console.log) // => [1, 2, 3]