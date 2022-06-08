import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/ReadonlyArray'

interface User {
    readonly id: number
    readonly name: string
    readonly followers: ReadonlyArray<User>
}

const getFollowers = (user: User): ReadonlyArray<User> => user.followers

const user: User = {
    id: 1,
    name: 'Giampaolo',
    followers: [{ id: 3, name: 'Luca', followers: [] }]
}

const followersOfFollowers: ReadonlyArray<User> = pipe(
    user,
    getFollowers,
    A.chain(getFollowers)
)

const inverse = (n: number): O.Option<number> =>
    n === 0 ? O.none : O.some(1 / n)

const inverseHead: O.Option<number> = pipe([1, 2, 3], A.head, O.chain(inverse))

console.log(inverseHead)