"use strict";
exports.__esModule = true;
exports.getFollowersNames2 = void 0;
var function_1 = require("fp-ts/function");
var ReadonlyArray_1 = require("fp-ts/ReadonlyArray");
var getFollowers = function (user) { return user.followers; };
var getName = function (user) { return user.name; };
// getFollowersNames: User -> ReadonlyArray<string>
var getFollowersNames = (0, function_1.flow)(getFollowers, (0, ReadonlyArray_1.map)(getName));
// o se preferite usare `pipe` al posto di `flow`...
var getFollowersNames2 = function (user) {
    return (0, function_1.pipe)(user, getFollowers, (0, ReadonlyArray_1.map)(getName));
};
exports.getFollowersNames2 = getFollowersNames2;
var user = {
    id: 1,
    name: 'Ruth R. Gonzalez',
    followers: [
        { id: 2, name: 'Terry R. Emerson', followers: [] },
        { id: 3, name: 'Marsha J. Joslyn', followers: [] }
    ]
};
console.log(getFollowersNames(user)); // => [ 'Terry R. Emerson', 'Marsha J. Joslyn' ]
