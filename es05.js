"use strict";
exports.__esModule = true;
var SemigroupMin = {
    concat: function (first, second) { return Math.min(first, second); }
};
var SemigroupMax = {
    concat: function (first, second) { return Math.max(first, second); }
};
console.log(SemigroupMin.concat(10, 8));
console.log(SemigroupMax.concat(150351561651, 315648978949));
