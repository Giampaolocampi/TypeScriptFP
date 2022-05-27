"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var EqNumber = {
    equals: function (first, second) { return first === second; }
};
(0, function_1.pipe)(EqNumber.equals(1, 1), console.log); // => true
(0, function_1.pipe)(EqNumber.equals(1, 2), console.log); // => false
