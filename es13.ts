/**
 * Monoid estende il potere di Semigroup fornendo un valore empty aggiuntivo.
 * empty viene detto unità (o "elemento neutro").
 */
import { Monoid } from 'fp-ts/Monoid'

/** number `Monoid` under addition */
const MonoidSum: Monoid<number> = {
    concat: (first, second) => first + second,
    empty: 0
}

/** number `Monoid` under multiplication */
const MonoidProduct: Monoid<number> = {
    concat: (first, second) => first * second,
    empty: 1
}

const MonoidString: Monoid<string> = {
    concat: (first, second) => first + second,
    empty: ''
}

/** boolean monoid under conjunction */
const MonoidAll: Monoid<boolean> = {
    concat: (first, second) => first && second,
    empty: true
}

/** boolean monoid under disjunction */
const MonoidAny: Monoid<boolean> = {
    concat: (first, second) => first || second,
    empty: false
}