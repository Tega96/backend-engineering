/**
 * Event emitter enables multiple functions to responds to one event
 * eg; When user registers - send welcome email, write a log, notify other services etc.. all at once
 * 
 * .on() - Registers one listener
 * .once() - Resgiters a listener that runs max of 1 times. 
 * .emit() - triggers an event and sends to the listeners
 */

import EventEmitter from "node:events";

const appEvent = new EventEmitter();

type UserRegistrePayload = {
    id: number,
    email: string
}

const user: UserRegistrePayload = { id: 1, email: "otiteotega@gmail.com"}

appEvent.on("user:registered", (user: UserRegistrePayload) => {
    user = { id: 1, email: "otiteotega@gmail.com"}
    console.log(`Welcome email to this user ${user.email}`)
})

appEvent.on("user:registered", (user: UserRegistrePayload) => {
    user = { id: 1, email: "otiteotega@gmail.com"}
    console.log(`A log of the user information for ${user.id}`)
})

appEvent.on("user:registered", () => {
    console.log("Random stuff is possible here")
})

appEvent.once("start", (user: UserRegistrePayload) => {
    user = { id: 1, email: "otiteotega@gmail.com"}
    console.log("Start this event now but don't repeat it. User id: ${user.id}")
})


function registerUser(): void {
    const user = {
        id: 1,
        email: "otiteotega@gmail.com"
    }
    console.log("user saved")

    appEvent.emit("start", user)
    appEvent.emit("start", user)
    appEvent.emit("start", user)
    appEvent.emit("user:registered", user)
    appEvent.emit("user:registered")
}

registerUser()

