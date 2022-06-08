import { pipe } from 'fp-ts/function'
import { match } from 'fp-ts/Option'


interface None {
    readonly _tag: 'None'
}

// represents a success
interface Some<A> {
    readonly _tag: 'Some'
    readonly value: A
}

type Option<A> = None | Some<A>

const none: Option<never> = { _tag: 'None' }

const some = <A>(value: A): Option<A> => ({ _tag: 'Some', value })


//                                      ↓ the type system "knows" that this computation may fail
const head = <A>(as: ReadonlyArray<A>): Option<A> => as.length === 0 ? none : some(as[0])

const numbers: ReadonlyArray<number> = [8, 3]


//la possibilità di errore è codificata nel type system
//L'unico modo per accedere al valore contenuto in una Option è gestire anche il caso di 
//fallimento utilizzando la funzione match
const result = pipe(
    head(numbers),
    match(
        () => 'Empty array',
        (n) => String(n)
    )
)

console.log(result)