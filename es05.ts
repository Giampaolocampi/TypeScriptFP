import { Semigroup } from 'fp-ts/Semigroup'

const SemigroupMin: Semigroup<number> = {
    concat: (first, second) => Math.min(first, second)
}

const SemigroupMax: Semigroup<number> = {
    concat: (first, second) => Math.max(first, second)
}


console.log(SemigroupMin.concat(10, 8))
console.log(SemigroupMax.concat(150351561651, 315648978949))