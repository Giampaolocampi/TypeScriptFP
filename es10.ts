/**
 * possiamo utilizzare il combinatore contramap: data una istanza di Eq per A e una funzione da B ad A, 
 * possiamo derivare una istanza di Eq per B
 */
import { Eq, struct, contramap } from 'fp-ts/Eq'
import { pipe } from 'fp-ts/function'
import * as N from 'fp-ts/number'
import * as S from 'fp-ts/string'

type User = {
    readonly id: number
    readonly name: string
}

const EqStandard: Eq<User> = struct({
    id: N.Eq,
    name: S.Eq
})

const EqID: Eq<User> = pipe(
    N.Eq,
    contramap((u: User) => u.id)
)

const EqName: Eq<User> = pipe(
    S.Eq,
    contramap((u: User) => u.name)
)

console.log(
    EqStandard.equals({ id: 1, name: 'Giulio' }, { id: 1, name: 'Giulio Canti' })
) // => false (le proprietà `name` sono diverse)

console.log(
    EqID.equals({ id: 1, name: 'Giulio' }, { id: 1, name: 'Giulio Canti' })
) // => true (nonostante le proprietà `name` siano diverse)

console.log(EqID.equals({ id: 1, name: 'Giulio' }, { id: 2, name: 'Giulio' }))
// => false (nonostante le proprietà `name` siano uguali)


console.log(EqName.equals({ id: 1, name: 'Giampaolo' }, { id: 10, name: 'Giampaolo' }))
// => true