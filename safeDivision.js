"use strict";
exports.__esModule = true;
var E = require("fp-ts/Either");
var function_1 = require("fp-ts/function");
function safeDivision(a, b) {
    return (b === 0) ?
        E.left(new Error("Oups divide by zero is not allowed")) :
        E.right(a / b);
}
var getResult = function (e) {
    return E.fold(function (_) { return _.message.toUpperCase(); }, function (_) { return _.toString(); })(e);
};
console.log((0, function_1.pipe)(safeDivision(10, 5), // right(2)
    E.map(function (_) { return _ * 10; }), // right(20)
    getResult // 20
));
console.log((0, function_1.pipe)(safeDivision(10, 5), // right(2)
    E.map(function (_) { return _ * 10; }), // right(20)
    E.chain(function (_) { return safeDivision(_, 0); }), //left(Error("Oups divide by zero is not allowed"))
    getResult // OUPS DIVIDE BY ZERO IS NOT ALLOWED
));
