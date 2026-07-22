import process from 'node:process';

process.env.NODE_ENV ?? 'development';

const command = process.argv[2] ?? "start"

process.on('exit', (code) => {
    console.log(`Process exited with code ${code}`)
})

const notSuccessful = process.argv.includes("--fail")
const crashed = process.argv.includes('--crash')

const runApp = (): void => {
    console.log({
        command,
    })
    if (notSuccessful) {
        console.error('Printed for --fail')
        process.exit(1)
    }
    if (crashed) {
        console.error('printed for--crashed')
        process.exit(1)
    }
}

runApp()