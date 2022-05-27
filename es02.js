"use strict";
exports.__esModule = true;
/**
 * 'intercalate' è una funzione dell'interfaccia Semigroup che data una coppia di elementi va a inserire
 * un elemento tra di essi
 * l'alias S invece richiama l'interfaccia string.
 * Quindi utilizzando S.Semigroup si va a richiamare un Semigroup<string>
 * Mentre pipe convoglia un'espressione iniziale verso un canale di funzioni
 */
var Semigroup_1 = require("fp-ts/Semigroup");
var S = require("fp-ts/string");
var function_1 = require("fp-ts/function");
var S1 = (0, function_1.pipe)(S.Semigroup, (0, Semigroup_1.intercalate)(' + '));
console.log(S1.concat('a', 'b'), 'a + b');
