"use strict";
exports.__esModule = true;
var Semigroup_1 = require("fp-ts/Semigroup");
var S = require("fp-ts/string");
var function_1 = require("fp-ts/function");
var S1 = (0, function_1.pipe)(S.Semigroup, (0, Semigroup_1.intercalate)(' + '));
console.log(S1.concat('a', 'b'), 'a + b');
