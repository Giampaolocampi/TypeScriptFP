import { Eq } from 'fp-ts/Eq'           //Eq sta per equality, serve per confrontare
import { pipe } from 'fp-ts/function'

const EqNumber: Eq<number> = {
    equals: (first, second) => first === second
}

pipe(EqNumber.equals(1, 1), console.log) // => true
pipe(EqNumber.equals(1, 2), console.log) // => false