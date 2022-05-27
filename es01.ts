import { Magma } from 'fp-ts/Magma'

const MagmaString: Magma<string> = {
  concat: (first, second) => first + " " + second
}

console.log(
  MagmaString.concat(
    MagmaString.concat(
      MagmaString.concat("Prima Stringa", "Seconda"), "Terza"), "Quarta"));


const MagmaSub: Magma<number> = {
  concat: (first, second) => first - second
}

console.log(
  MagmaSub.concat(
    MagmaSub.concat(MagmaSub.concat(MagmaSub.concat(10, 2), 3), 1),
    2
  )
)
// => 2


// helper
const getPipeableConcat = <A>(M: Magma<A>) => (second: A) => (first: A): A =>
  M.concat(first, second)

const concat = getPipeableConcat(MagmaSub);
const concatString = getPipeableConcat(MagmaString);
console.log(concat(2));

// esempio di utilizzo

import { pipe } from 'fp-ts/function';
import { second } from 'fp-ts/lib/Reader';
console.log(pipe(10, concat(3), concat(4)));
console.log(pipe("PrimoValore", concatString("SecondoValore"), concatString("TerzoValore")));

// => 2