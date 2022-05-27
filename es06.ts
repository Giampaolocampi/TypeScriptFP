import { Magma, concatAll } from 'fp-ts/Magma'


const MagmaMin: Magma<number> = {
    concat: (first, second) => Math.min(first, second)
}

const MagmaMax: Magma<number> = {
    concat: (first, second) => Math.max(first, second)
}

const minAll = concatAll(MagmaMin)(10)
const maxAll = concatAll(MagmaMax)(0)



console.log(minAll([1, 2, 34, 5, 6, 7]))
console.log(maxAll([1, 2, 34, 5, 6, 7]))
