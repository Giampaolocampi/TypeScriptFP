import { flow } from 'fp-ts/function'
import { Task, map } from 'fp-ts/Task'


// -------------------
// esempio di utilizzo
// -------------------

interface User {
    readonly id: number
    readonly name: string
}

// a dummy remote database
const database: Record<number, User> = {
    1: { id: 1, name: 'Ruth R. Gonzalez' },
    2: { id: 2, name: 'Terry R. Emerson' },
    3: { id: 3, name: 'Marsha J. Joslyn' }
}

const getUser = (id: number): Task<User> => () => Promise.resolve(database[id])
const getName = (user: User): string => user.name

// getUserName: number -> Task<string>
const getUserName = flow(getUser, map(getName))

getUserName(1)().then(console.log) // => Ruth R. Gonzalez