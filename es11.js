"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var N = require("fp-ts/number");
var sort = function (O) { return function (as) { return as.slice().sort(O.compare); }; }; //utilizza il metodo slice per partire dal primo elemento
(0, function_1.pipe)([3, 2, 1], sort(N.Ord), console.log); // => [1, 2, 3]
