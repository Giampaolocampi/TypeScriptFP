import { flow, pipe } from 'fp-ts/function'
import { map } from 'fp-ts/ReadonlyArray'
// trasforma funzioni `B -> C` in funzioni `ReadonlyArray<B> -> ReadonlyArray<C>`


// -------------------
// esempio di utilizzo
// -------------------

interface User {
    readonly id: number
    readonly name: string
    readonly followers: ReadonlyArray<User>
}

const getFollowers = (user: User): ReadonlyArray<User> => user.followers
const getName = (user: User): string => user.name

// getFollowersNames: User -> ReadonlyArray<string>
const getFollowersNames = flow(getFollowers, map(getName))

// o se preferite usare `pipe` al posto di `flow`...
export const getFollowersNames2 = (user: User) =>
    pipe(user, getFollowers, map(getName))

const user: User = {
    id: 1,
    name: 'Ruth R. Gonzalez',
    followers: [
        { id: 2, name: 'Terry R. Emerson', followers: [] },
        { id: 3, name: 'Marsha J. Joslyn', followers: [] }
    ]
}

console.log(getFollowersNames(user)) // => [ 'Terry R. Emerson', 'Marsha J. Joslyn' ]