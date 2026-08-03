
/**
 * Task - To fetch a single user using callback and async
 * Callback = a function that is passed into another function as parameter.
 * syntax - callback(error, result) 
 */

// import { resolve } from "node:dns";

type User = {
    id: number;
    name: string;
    role: "user" | "admin"
}

const users: User[] = [
    {
        id: 1,
        name: "otega",
        role: "admin"
    },
    {
        id: 2,
        name: "john",
        role: "user"
    },
    {
        id: 3,
        name: "mary",
        role: "user"
    },
]

// Callback funcion 
function findUserWithCallback(
    userId: number,
    callback: (error: Error | null, user?: unknown) => void
): void {
    setTimeout(() => {
        const user = users.find(user => user.id === userId);
        if (!user) {
            callback(new Error(`user with the id:${userId} was not found`))
            return;
        }
        callback(null, user)
    },500)
}


findUserWithCallback(2, (error, user) => {
    if (error) {
        console.log('callback error',error.message)
        return;
    }
    console.log('callback result', user)
})


/**
 * Promise - have a resolve and reject property. 
 * use the reject() if not found, and resolved() if found
 * .then - determines the next step when the code is run. either it is resolved or rejected.
 * .then - resolves the value
 * .catch - used for rejected values.
 */
function findUserWithPromise(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user) => user.id === userId);
    
            if (!user) {
                reject(new Error(`user with the user id: ${userId} does not exist`))
                return;
            }
            resolve(user)
        },1000)
    })
}


findUserWithPromise(3).then((user) => {
    console.log(`Promise resolved ${user.id} ${user.name} ${user.role}`)
}).catch((error: Error) => {
    console.log(`Promise error ${error.message}`)
})


/**
 * Async - much cleaner than promise code, but does the same thing. 
 * Async code returns promise, makes use of try and catch block. 
 */
async function findUserWithAsync(userId: number): Promise<void> {
    try {
        const user = await findUserWithPromise(userId)
        console.log('Async/await', user.name);
    } catch(error) {
        const message = error instanceof Error ? error.message : "unknown error"
        console.log('async/await', message)
    }
}

findUserWithAsync(3)