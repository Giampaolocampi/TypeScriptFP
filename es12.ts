/**
 * Ordinare un Utente tramite l'età
 * 
 * sortBy Ordina gli elementi di un array in ordine crescente,
 * in cui gli elementi vengono confrontati usando prima ords[0], poi ords[1]
 */

import { pipe } from 'fp-ts/function'
import * as N from 'fp-ts/number'
import { contramap, Ord } from 'fp-ts/Ord'
import { Semigroup } from 'fp-ts/Semigroup'
import { sortBy } from 'fp-ts/ReadonlyArray'
import * as S from 'fp-ts/string'

type User = {
    readonly name: string
    readonly age: number
}

const Utenti = [{
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
}]


const min = <A>(O: Ord<A>): Semigroup<A> => ({
    concat: (first, second) => (O.compare(first, second) === 1 ? second : first)
})




/**
 * contramap: data una istanza di Ord per A e una funzione da B ad A, 
 * possiamo derivare una istanza di Ord per B.
 */
const byAge: Ord<User> = pipe(
    N.Ord,
    contramap((u: User) => u.age)
)

const byName: Ord<User> = pipe(
    S.Ord,
    contramap((u: User) => u.name)
)

const sortByName = sortBy([byName])
const orderUtentiByName = sortByName(Utenti)
console.log("Utenti ordinati per Nome:")
console.log(orderUtentiByName)


const sortByAge = sortBy([byAge])
const orderUtentiByAge = sortByAge(Utenti) //Array ordinato
console.log("Utenti ordinati per Eta")
console.log(orderUtentiByAge)


console.log("Stampa del piu giovane tra un elemento input e l'utente piu anziano")
console.log(min(byAge).concat({ name: 'Luca', age: 21 }, orderUtentiByAge[orderUtentiByAge.length - 1])) //guardo quale è il piu piccolo tra 'Luca' e il piu vecchio dell'array


