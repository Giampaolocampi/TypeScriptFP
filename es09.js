"use strict";
exports.__esModule = true;
var Eq_1 = require("fp-ts/Eq");
var N = require("fp-ts/number");
var EqPoint = (0, Eq_1.tuple)(N.Eq, N.Eq);
console.log(EqPoint.equals([1, 2], [1, 2])); // => true
console.log(EqPoint.equals([1, 2], [1, -2])); // => false
