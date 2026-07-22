import os from 'node:os';

// Check platform
console.log(os.platform())

// memory
console.log("os free memory in bytes:", os.freemem())
console.log("os total memory in bytes:", os.totalmem())

// cpu info
const cpus = os.cpus()
console.log('os model:', cpus[0]?.model, cpus[0]?.speed, cpus[0]?.times.user)

console.log('os release:', os.release())
console.log('os type:', os.type())
console.log('os architecture:', os.arch())

// home and temporary directory
console.log('os home directory -', os.homedir())
console.log('os temporary directory -', os.tmpdir())