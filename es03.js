"use strict";
exports.__esModule = true;
/**
 * Reverse di magma, inverte semplicemente gli elementi passati (solo 2) visto che magma gestisce coppie di
 * valori nel const
 * Mentre il concatAll
 * N richiama l'interfaccia number, e la firma N.MagmaSub corrisponde al semigruppo Magma<number> che
 * segue concat: (first - second)
 * l'assert fa un controllo tra il primo e il secondo valore, se non sono uguali genera un errore come output
 */
var Magma_1 = require("fp-ts/Magma");
var N = require("fp-ts/number");
var assert_deep_strict_equal_1 = require("assert-deep-strict-equal");
var subAll = (0, Magma_1.concatAll)((0, Magma_1.reverse)(N.MagmaSub))(0);
(0, assert_deep_strict_equal_1.assertDeepStrictEqual)(subAll([1, 2, 3]), 2);
