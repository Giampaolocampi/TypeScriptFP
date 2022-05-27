/**
 * tuple prende in ingresso una tupla di semigruppi e restituisce un semigruppo di tuple
 */
import * as N from 'fp-ts/number'
import { Semigroup, tuple } from 'fp-ts/Semigroup'

// modella un vettore che parte dall'origine
type Vector = readonly [number, number]

// modella la somma di due vettori
const SemigroupVector: Semigroup<Vector> = tuple(N.SemigroupSum, N.SemigroupSum)

const v1: Vector = [1, 1]
const v2: Vector = [1, 2]

console.log(SemigroupVector.concat(v1, v2)) // => [2, 3]