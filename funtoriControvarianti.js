"use strict";
exports.__esModule = true;
var Option_1 = require("fp-ts/Option");
var Eq_1 = require("fp-ts/Eq");
var getId = function (_) { return _.id; };
// come lavora `map`...
// const getIdOption: (fa: Option<User>) => Option<number>
var getIdOption = (0, Option_1.map)(getId);
// come lavora `contramap`...
// const getIdEq: (fa: Eq<number>) => Eq<User>
var getIdEq = (0, Eq_1.contramap)(getId);
var N = require("fp-ts/number");
var user1 = {
  id: 1,
  name: 'Giampaolo'
};
var user2 = {
  id: 2,
  name: 'Giampaolo'
};
var EqID = getIdEq(N.Eq);
console.log(EqID.equals(user1, user1));
console.log(EqID.equals(user1, user2));
/*

Nel capitolo su `Eq` avevamo fatto:

const EqID: Eq<User> = pipe(
  N.Eq,
  contramap((_: User) => _.id)
)
*/
