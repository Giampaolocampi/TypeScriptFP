"use strict";
exports.__esModule = true;
exports.getByUsername = void 0;
/*

  Rifattorizzare il seguente codice in modo da eliminare l'errore di compilazione.

*/
var function_1 = require("fp-ts/function");
var Option_1 = require("fp-ts/Option");
// -------------------------------------
// COSTRUTTORI
// -------------------------------------
var ok = function (body) { return ({ code: 200, body: body }); };
var notFound = function (message) {
  return ({
    code: 404,
    message: message
  });
};
// -------------------------------------
// API
// -------------------------------------
exports.getByUsername = (0, function_1.flow)(queryByUsername, (0, Option_1.match)(function () { return notFound('User not found.'); }, ok));
