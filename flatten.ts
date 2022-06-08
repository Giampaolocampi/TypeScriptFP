import { pipe } from 'fp-ts/function'
import * as R from 'fp-ts/ReadonlyArray'



interface User {
    readonly id: number
    readonly name: string
    readonly followers: ReadonlyArray<User>
}

const getFollowers = (user: User): ReadonlyArray<User> => user.followers


//creo un user da usare come follower innestato
const userF: User = {
    id: 5,
    name: 'Alex',
    followers: []
}


//creo un user che ha come follower userF
const user: User = {
    id: 1,
    name: 'Giampaolo',
    followers: [{ id: 3, name: 'Luca', followers: [userF] }]
}


// followersOfFollowers: ReadonlyArray<User>
//followersOfFollowers ha tipo ReadonlyArray<ReadonlyArray<User>> 
//ma noi vorremmo ReadonlyArray<User>. Abbiamo bisogno di appiattire (flatten) gli array innestati.
const followersOfFollowers = pipe(
    user,
    getFollowers,
    R.map(getFollowers),
    R.flatten,
    console.log
)

