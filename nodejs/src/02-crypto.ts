import crypto from 'node:crypto'

// Random token - useful for generating email verification token
const retryToken = crypto.randomBytes(16).toString('hex')
console.log(retryToken)

// Random UUID - useful for generating random Id for user, cart etc
const userId = crypto.randomUUID()
console.log(userId) 


// hashing - useful for hashing password
const text = 'Hello world';
const secret = "my-secret-text"
const message = "user-id=234"

const hash = crypto.createHash('sha256').update(text).digest('hex')
console.log(hash)

// Hmac require secrete
const signature = crypto.createHmac('sha256', secret).update(message).digest('hex')
console.log(signature)

// To verify signature
const verifySignature = crypto.createHmac('sha256', secret).update(message).digest('hex')
console.log('This will be true if signature is verified:', signature === verifySignature)