"use strict";
exports.__esModule = true;
var Magma_1 = require("fp-ts/Magma");
var MagmaMin = {
    concat: function (first, second) { return Math.min(first, second); }
};
var MagmaMax = {
    concat: function (first, second) { return Math.max(first, second); }
};
var minAll = (0, Magma_1.concatAll)(MagmaMin)(10);
var maxAll = (0, Magma_1.concatAll)(MagmaMax)(0);
console.log(minAll([1, 2, 34, 5, 6, 7]));
console.log(maxAll([1, 2, 34, 5, 6, 7]));
