"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var R = require("fp-ts/ReadonlyArray");
var getFollowers = function (user) { return user.followers; };
//creo un user da usare come follower innestato
var userF = {
    id: 5,
    name: 'Alex',
    followers: []
};
//creo un user che ha come follower userF
var user = {
    id: 1,
    name: 'Giampaolo',
    followers: [{ id: 3, name: 'Luca', followers: [userF] }]
};
// followersOfFollowers: ReadonlyArray<User>
//followersOfFollowers ha tipo ReadonlyArray<ReadonlyArray<User>> 
//ma noi vorremmo ReadonlyArray<User>. Abbiamo bisogno di appiattire (flatten) gli array innestati.
var followersOfFollowers = (0, function_1.pipe)(user, getFollowers, R.map(getFollowers), R.flatten, console.log);
