"use strict";
exports.__esModule = true;
var Console_1 = require("fp-ts/Console");
var IO_1 = require("fp-ts/IO");
var function_1 = require("fp-ts/function");
var fs = require("fs");
// -----------------------------------------
// funzioni di libreria
// -----------------------------------------
var readFile = function (filename) { return function () {
    return fs.readFileSync(filename, 'utf-8');
}; };
var writeFile = function (filename, data) { return function () {
    return fs.writeFileSync(filename, data, { encoding: 'utf-8' });
}; };
// API derivata dalle precedenti
var modifyFile = function (filename, f) {
    return (0, function_1.pipe)(readFile(filename), (0, IO_1.chain)(function (s) { return writeFile(filename, f(s)); }));
};
// -----------------------------------------
// programma
// -----------------------------------------
var program1 = (0, function_1.pipe)(readFile('file.txt'), (0, IO_1.chain)(Console_1.log), (0, IO_1.chain)(function () { return modifyFile('file.txt', function (s) { return s + '\n// eof'; }); }), (0, IO_1.chain)(function () { return readFile('file.txt'); }), (0, IO_1.chain)(Console_1.log));
//L'azione:
//pipe(readFile('file.txt'), chain(log)) è ripetuta due volte nel programma, 
//ma dato che vale la trasparenza referenziale possiamo mettere a fattor comune l'azione 
//assegnandola ad una costante:
var read = (0, function_1.pipe)(readFile('file.txt'), (0, IO_1.chain)(Console_1.log));
var modify = modifyFile('file.txt', function (s) { return s + '\n// eof'; });
var program2 = (0, function_1.pipe)(read, (0, IO_1.chain)(function () { return modify; }), (0, IO_1.chain)(function () { return read; }));
