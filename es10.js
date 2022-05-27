"use strict";
exports.__esModule = true;
/**
 * possiamo utilizzare l'utile combinatore contramap: data una istanza di Eq per A e una funzione da B ad A,
 * possiamo derivare una istanza di Eq per B
 */
var Eq_1 = require("fp-ts/Eq");
var function_1 = require("fp-ts/function");
var N = require("fp-ts/number");
var S = require("fp-ts/string");
var EqStandard = (0, Eq_1.struct)({
    id: N.Eq,
    name: S.Eq
});
var EqID = (0, function_1.pipe)(N.Eq, (0, Eq_1.contramap)(function (u) { return u.id; }));
var EqName = (0, function_1.pipe)(S.Eq, (0, Eq_1.contramap)(function (u) { return u.name; }));
console.log(EqStandard.equals({ id: 1, name: 'Giulio' }, { id: 1, name: 'Giulio Canti' })); // => false (le proprietà `name` sono diverse)
console.log(EqID.equals({ id: 1, name: 'Giulio' }, { id: 1, name: 'Giulio Canti' })); // => true (nonostante le proprietà `name` siano diverse)
console.log(EqID.equals({ id: 1, name: 'Giulio' }, { id: 2, name: 'Giulio' }));
// => false (nonostante le proprietà `name` siano uguali)
console.log(EqName.equals({ id: 1, name: 'Giampaolo' }, { id: 10, name: 'Giampaolo' }));
// => true
