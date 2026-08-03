import { setTimeout as sleep } from "node:timers/promises"
/**
 * timer module - To set delay or run some code after short delay
 * To repeat a process after some interval eg every 2 sec
 * 
 * SetTimeout, SetInterval, ClearTimeout, clearTimeout, setImmediate
 */

/**
 * runSetTimeoutExample - SetTimeout execute a code after a given time
 */
 function runSetTimeoutExample() {
    console.log("1. Process starting")
    setTimeout( () => {
        console.log("2. This executed after 2 seconds")
    }, 2000)
    console.log("3. This runs immediately. node does not wait")
}

/**
 * clearTimeout() - deletes the code set to run
 */
function runClearTimeoutExample() {
    const timerId = setTimeout(() => {
        console.log("4. This will not run if it is cleared")
    },3000)

    clearTimeout(timerId)
    console.log("5. timeout clearance completed successfully")
}

/**
 * setInterval - runs the callback over again according to the fixed number of times.
 */
function runSetIntervalExample() {
    let count = 0;

    const intervalId = setInterval(() => {
        count++
        console.log(`7. Great day to be alive. This is day ${count}`);
        if (count === 6) {
            clearInterval(intervalId)
        }
    },2000)
    
}

/**
 * setImmediate - runs as soon as the current script is run.
 * 
 */
function runSetImmediateExample(): void {
    setImmediate(() => {
        console.log("8. setImmediate callback")
    })
    console.log("9. Sync set immediate")
}

async function runPromiseTimerExample(): Promise<void> {
    console.log("10. Waiting for promise based timer")

    await sleep(1500);
    console.log("11. Promise based timer finished after 5 seconds")
}

function runTimerDemo() {
    // runSetTimeoutExample();
    // runClearTimeoutExample();
    // runSetIntervalExample()
    // runSetImmediateExample()

}

runTimerDemo()
runPromiseTimerExample().catch((error: unknown) => {
    console.error("timer based demo failed", error)
})