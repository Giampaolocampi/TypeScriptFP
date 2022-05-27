"use strict";
exports.__esModule = true;
/**
 * tuple prende in ingresso una tupla di semigruppi e restituisce un semigruppo di tuple
 */
var N = require("fp-ts/number");
var Semigroup_1 = require("fp-ts/Semigroup");
// modella la somma di due vettori
var SemigroupVector = (0, Semigroup_1.tuple)(N.SemigroupSum, N.SemigroupSum);
var v1 = [1, 1];
var v2 = [1, 2];
console.log(SemigroupVector.concat(v1, v2)); // => [2, 3]
