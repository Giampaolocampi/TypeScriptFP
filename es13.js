"use strict";
exports.__esModule = true;
/** number `Monoid` under addition */
var MonoidSum = {
    concat: function (first, second) { return first + second; },
    empty: 0
};
/** number `Monoid` under multiplication */
var MonoidProduct = {
    concat: function (first, second) { return first * second; },
    empty: 1
};
var MonoidString = {
    concat: function (first, second) { return first + second; },
    empty: ''
};
/** boolean monoid under conjunction */
var MonoidAll = {
    concat: function (first, second) { return first && second; },
    empty: true
};
/** boolean monoid under disjunction */
var MonoidAny = {
    concat: function (first, second) { return first || second; },
    empty: false
};
