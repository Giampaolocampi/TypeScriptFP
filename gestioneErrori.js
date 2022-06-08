"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var Option_1 = require("fp-ts/Option");
var none = { _tag: 'None' };
var some = function (value) { return ({ _tag: 'Some', value: value }); };
//                                      ↓ the type system "knows" that this computation may fail
var head = function (as) { return as.length === 0 ? none : some(as[0]); };
var numbers = [8, 3];
//la possibilità di errore è codificata nel type system
//L'unico modo per accedere al valore contenuto in una Option è gestire anche il caso di 
//fallimento utilizzando la funzione match
var result = (0, function_1.pipe)(head(numbers), (0, Option_1.match)(function () { return 'Empty array'; }, function (n) { return String(n); }));
console.log(result);
