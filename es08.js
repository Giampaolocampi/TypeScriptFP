"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var N = require("fp-ts/number");
// restituisce `true` se l'elemento `a` compare nella lista `as`
var elem = function (E) { return function (a) { return function (as) {
    return as.some(function (e) { return E.equals(a, e); });
}; }; }; //e corrisponde all'elemento dell'array passato, mentre a corrisponde all'elemento che gli passiamo noi
(0, function_1.pipe)([1, 2, 3], elem(N.Eq)(2), console.log); // => true
(0, function_1.pipe)([1, 2, 3], elem(N.Eq)(4), console.log); // => false
