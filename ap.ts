import { flow, pipe } from 'fp-ts/function'
import * as T from 'fp-ts/Task'



const liftA2 = <B, C, D>(g: (b: B) => (c: C) => D) => (fb: T.Task<B>) => (fc: T.Task<C>): T.Task<D> =>
    pipe(fb, T.map(g), T.ap(fc))

interface User {
    readonly id: number
    readonly name: string
    readonly followers: ReadonlyArray<User>
}

const addFollower = (follower: User) => (user: User): User => ({
    ...user,
    followers: [...user.followers, follower]
})


declare const fetchUser: (id: number) => T.Task<User>

// const program: (id: number) => (fc: T.Task<User>) => T.Task<User>
const program = flow(fetchUser, liftA2(addFollower))

const userId = 1
const followerId = 3

// const result: T.Task<User>
const result = program(followerId)(fetchUser(userId))