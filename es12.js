"use strict";
/**
 * Ordinare un Utente tramite l'età
 *
 * sortBy Ordina gli elementi di un array in ordine crescente,
 * in cui gli elementi vengono confrontati usando prima ords[0], poi ords[1]
 */
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var N = require("fp-ts/number");
var Ord_1 = require("fp-ts/Ord");
var ReadonlyArray_1 = require("fp-ts/ReadonlyArray");
var S = require("fp-ts/string");
var Utenti = [{
    name: 'Giampaolo',
    age: 21
},
{
    name: 'Alessio',
    age: 15
},
{
    name: 'Marco',
    age: 8
},
{
    name: 'Gaia',
    age: 23
}];
var min = function (O) {
    return ({
        concat: function (first, second) { return (O.compare(first, second) === 1 ? second : first); }
    });
};
/**
 * contramap: data una istanza di Ord per A e una funzione da B ad A,
 * possiamo derivare una istanza di Ord per B.
 */
var byAge = (0, function_1.pipe)(N.Ord, (0, Ord_1.contramap)(function (u) { return u.age; }));
var byName = (0, function_1.pipe)(S.Ord, (0, Ord_1.contramap)(function (u) { return u.name; }));
var sortByName = (0, ReadonlyArray_1.sortBy)([byName]);
var orderUtentiByName = sortByName(Utenti);
console.log("Utenti ordinati per Nome:");
console.log(orderUtentiByName);
var sortByAge = (0, ReadonlyArray_1.sortBy)([byAge]);
var orderUtentiByAge = sortByAge(Utenti); //Array ordinato
console.log("Utenti ordinati per Eta");
console.log(orderUtentiByAge);
console.log("Stampa del piu giovane tra un elemento input e l'utente piu anziano");
console.log(min(byAge).concat({ name: 'Luca', age: 21 }, orderUtentiByAge[orderUtentiByAge.length - 1])); //guardo quale è il piu piccolo tra 'Luca' e il piu vecchio dell'array
