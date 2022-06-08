"use strict";
exports.__esModule = true;
var function_1 = require("fp-ts/function");
var E = require("fp-ts/Either");
// -----------------------------------------
// programma (NON modificato)
// -----------------------------------------
var program5 = function (D) {
    var modifyFile = function (filename, f) {
        return (0, function_1.pipe)(D.readFile(filename), D.chain(function (s) { return D.writeFile(filename, f(s)); }));
    };
    return (0, function_1.pipe)(D.readFile('-.txt'), D.chain(D.log), D.chain(function () { return modifyFile('file.txt', function (s) { return s + '\n// eof'; }); }), D.chain(function () { return D.readFile('file.txt'); }), D.chain(D.log));
};
// -----------------------------------------
// istanza per `Deps` (modificato)
// -----------------------------------------
var fs = require("fs");
var Console_1 = require("fp-ts/Console");
var TaskEither_1 = require("fp-ts/TaskEither");
var DepsAsync = {
    readFile: function (filename) { return function () {
        return new Promise(function (resolve) {
            return fs.readFile(filename, { encoding: 'utf-8' }, function (err, s) {
                if (err !== null) {
                    resolve(E.left(err));
                }
                else {
                    resolve(E.right(s));
                }
            });
        });
    }; },
    writeFile: function (filename, data) { return function () {
        return new Promise(function (resolve) {
            return fs.writeFile(filename, data, function (err) {
                if (err !== null) {
                    resolve(E.left(err));
                }
                else {
                    resolve(E.right(undefined));
                }
            });
        });
    }; },
    log: function (a) { return (0, TaskEither_1.fromIO)((0, Console_1.log)(a)); },
    chain: TaskEither_1.chain
};
// dependency injection
program5(DepsAsync)().then(console.log);
