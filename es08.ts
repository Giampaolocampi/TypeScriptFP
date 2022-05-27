/**
 * Eq è un tipo classe che tramite il metodo equals controlla se due elementi sono uguali, output è boolean
 */
import { Eq } from 'fp-ts/Eq'
import { pipe } from 'fp-ts/function'
import * as N from 'fp-ts/number'

// restituisce `true` se l'elemento `a` compare nella lista `as`
const elem = <A>(E: Eq<A>) => (a: A) => (as: ReadonlyArray<A>): boolean =>
    as.some((e) => E.equals(a, e))      //e corrisponde all'elemento dell'array passato, mentre a corrisponde all'elemento che gli passiamo noi



pipe([1, 2, 3], elem(N.Eq)(2), console.log) // => true
pipe([1, 2, 3], elem(N.Eq)(4), console.log) // => false

