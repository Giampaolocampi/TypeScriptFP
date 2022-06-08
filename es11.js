"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var N = require("fp-ts/number");
var S = require("fp-ts/string");
var ReadonlyArray_1 = require("fp-ts/ReadonlyArray");
//ordinare un array di numeri
(0, function_1.pipe)([3, 2, 1, 6, 4, 5], (0, ReadonlyArray_1.sort)(N.Ord), console.log); // => [1, 2, 3, 4, 5, 6]
//ordinare un array di stringhe
(0, function_1.pipe)(['Giampaolo', 'Alessio', 'Andrea', 'Chiara'], (0, ReadonlyArray_1.sort)(S.Ord), console.log);
//decrescente
(0, function_1.pipe)([3, 2, 1, 6, 4, 5], (0, ReadonlyArray_1.sort)(N.Ord), ReadonlyArray_1.reverse, console.log);
