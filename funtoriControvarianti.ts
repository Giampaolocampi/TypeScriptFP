import { map } from 'fp-ts/Option'
import { contramap } from 'fp-ts/Eq'

type User = {
    readonly id: number
    readonly name: string
}

const getId = (_: User): number => _.id

// come lavora `map`...
// const getIdOption: (fa: Option<User>) => Option<number>
const getIdOption = map(getId)

// come lavora `contramap`...
// const getIdEq: (fa: Eq<number>) => Eq<User>
const getIdEq = contramap(getId)

import * as N from 'fp-ts/number'
const user1: User =
{
    id: 1,
    name: 'Giampaolo'
}
const user2: User =
{
    id: 2,
    name: 'Giampaolo'
}

const EqID = getIdEq(N.Eq)
console.log(EqID.equals(user1, user1))
console.log(EqID.equals(user1, user2))

