import { log } from 'fp-ts/Console'
import { IO, chain } from 'fp-ts/IO'
import { pipe } from 'fp-ts/function'
import * as fs from 'fs'

// -----------------------------------------
// funzioni di libreria
// -----------------------------------------

const readFile = (filename: string): IO<string> => () =>
    fs.readFileSync(filename, 'utf-8')

const writeFile = (filename: string, data: string): IO<void> => () =>
    fs.writeFileSync(filename, data, { encoding: 'utf-8' })

// API derivata dalle precedenti
const modifyFile = (filename: string, f: (s: string) => string): IO<void> =>
    pipe(
        readFile(filename),
        chain((s) => writeFile(filename, f(s)))
    )

// -----------------------------------------
// programma
// -----------------------------------------

const program1 = pipe(
    readFile('file.txt'),
    chain(log),
    chain(() => modifyFile('file.txt', (s) => s + '\n// eof')),
    chain(() => readFile('file.txt')),
    chain(log)
)
//L'azione:
//pipe(readFile('file.txt'), chain(log)) è ripetuta due volte nel programma, 
//ma dato che vale la trasparenza referenziale possiamo mettere a fattor comune l'azione 
//assegnandola ad una costante:

const read = pipe(readFile('file.txt'), chain(log))
const modify = modifyFile('file.txt', (s) => s + '\n// eof')

const program2 = pipe(
    read,
    chain(() => modify),
    chain(() => read)
)