import { Task } from 'fp-ts/Task'
import { pipe } from 'fp-ts/function'
import * as E from 'fp-ts/Either'

// -----------------------------------------
// effetto del nostro programma (modificato)
// -----------------------------------------

interface FileSystem<A> extends Task<E.Either<Error, A>> { }

// -----------------------------------------
// dipendenze (NON modificato)
// -----------------------------------------

interface Deps {
    readonly readFile: (filename: string) => FileSystem<string>
    readonly writeFile: (filename: string, data: string) => FileSystem<void>
    readonly log: <A>(a: A) => FileSystem<void>
    readonly chain: <A, B>(
        f: (a: A) => FileSystem<B>
    ) => (ma: FileSystem<A>) => FileSystem<B>
}

// -----------------------------------------
// programma (NON modificato)
// -----------------------------------------

const program5 = (D: Deps) => {
    const modifyFile = (filename: string, f: (s: string) => string) =>
        pipe(
            D.readFile(filename),
            D.chain((s) => D.writeFile(filename, f(s)))
        )

    return pipe(
        D.readFile('-.txt'),
        D.chain(D.log),
        D.chain(() => modifyFile('file.txt', (s) => s + '\n// eof')),
        D.chain(() => D.readFile('file.txt')),
        D.chain(D.log)
    )
}

// -----------------------------------------
// istanza per `Deps` (modificato)
// -----------------------------------------

import * as fs from 'fs'
import { log } from 'fp-ts/Console'
import { chain, fromIO } from 'fp-ts/TaskEither'

const DepsAsync: Deps = {
    readFile: (filename) => () =>
        new Promise((resolve) =>
            fs.readFile(filename, { encoding: 'utf-8' }, (err, s) => {
                if (err !== null) {
                    resolve(E.left(err))
                } else {
                    resolve(E.right(s))
                }
            })
        ),
    writeFile: (filename: string, data: string) => () =>
        new Promise((resolve) =>
            fs.writeFile(filename, data, (err) => {
                if (err !== null) {
                    resolve(E.left(err))
                } else {
                    resolve(E.right(undefined))
                }
            })
        ),
    log: (a) => fromIO(log(a)),
    chain
}

// dependency injection
program5(DepsAsync)().then(console.log)