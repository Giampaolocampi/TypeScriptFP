"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var O = require("fp-ts/Option");
var A = require("fp-ts/ReadonlyArray");
var getFollowers = function (user) { return user.followers; };
var user = {
    id: 1,
    name: 'Giampaolo',
    followers: [{ id: 3, name: 'Luca', followers: [] }]
};
var followersOfFollowers = (0, function_1.pipe)(user, getFollowers, A.chain(getFollowers));
var inverse = function (n) {
    return n === 0 ? O.none : O.some(1 / n);
};
var inverseHead = (0, function_1.pipe)([1, 2, 3], A.head, O.chain(inverse));
console.log(inverseHead);
