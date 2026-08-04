/**
 * Buffers - raw binary data. They are temporary storage to moving data. Stores data in bytes
 * Places to use buffers: reading files, receiving http request bodies, working with string, handling images, pdf files, videos, encryption and hashing.
 * Why use buffers instead of string? String is only good for normal text. But if you need binary data stored in bytes, you need buffers.
 * Buffers also allows efficient file copying and network communication.
 * 
 * Buffer.from - create buffer from data
 * Buffer.toString() - convert to text from buffer
 * Buffer.link - gives you the link
 * Buffer.alloc - allocates blocks of memory to the buffer
 * Buffer.write - Write data into a buffer 
 * Buffer.concat - concatenate multiple buffer
*/




// Buffer.from - Create a buffer from a normal text
const textBuffer = Buffer.from("Hello World")
console.log(textBuffer)

// convert to string
console.log(textBuffer.toString('utf-8'))

// get the length of a buffer
const lenOfBuffer = Buffer.from("Hello from the other side")
console.log(lenOfBuffer.length)

// alloc - To create a fixed number of buffer. Allocate memory to a buffer
const fixedBuffer = Buffer.alloc(5)
console.log("empty fixed buffer", fixedBuffer)

// write to fixed buffer
fixedBuffer.write("API")
console.log("fixed buffer after write", fixedBuffer)
console.log("fixed buffer as text", fixedBuffer.toString('utf-8'))

// Chuncks chunks of buffers can be concatenated
const chunks = [Buffer.from("Hello"), Buffer.from("Node"), Buffer.from("JS")]

const combineBuffer = Buffer.concat(chunks);
console.log(combineBuffer, combineBuffer.toString("utf-8"))
