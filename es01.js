"use strict";
exports.__esModule = true;
var MagmaString = {
    concat: function (first, second) { return first + " " + second; }
};
console.log(MagmaString.concat(MagmaString.concat(MagmaString.concat("Prima Stringa", "Seconda"), "Terza"), "Quarta"));
var MagmaSub = {
    concat: function (first, second) { return first - second; }
};
console.log(MagmaSub.concat(MagmaSub.concat(MagmaSub.concat(MagmaSub.concat(10, 2), 3), 1), 2));
// => 2
// helper
var getPipeableConcat = function (M) { return function (second) { return function (first) {
    return M.concat(first, second);
}; }; };
var concat = getPipeableConcat(MagmaSub);
var concatString = getPipeableConcat(MagmaString);
console.log(concat(2));
// esempio di utilizzo
var function_1 = require("fp-ts/function");
console.log((0, function_1.pipe)(10, concat(3), concat(4)));
console.log((0, function_1.pipe)("PrimoValore", concatString("SecondoValore"), concatString("TerzoValore")));
// => 2
