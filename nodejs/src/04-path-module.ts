import path from 'node:path'

// Path is used to build and read file path.

// path.join use the right separator for the appropriate operating system. 
path.join()

// process.cwd - gives the current working directory
const projectRoot = process.cwd()
console.log(projectRoot)

/**
 * task - represent the filepath below in string
 * /uploads/users/48/profile-photo.png
 */
const userId = '48'
const fileName = 'profile-photo.png'

const profileUpload = path.join(projectRoot, "users", userId, fileName)
console.log(profileUpload)

// Get the basename of file 
const baseName = path.basename(profileUpload)
console.log(baseName)

// Get the extension of file
const extensionName = path.extname(profileUpload)
console.log(extensionName+"\n")

// Get the parent folder
const parentDir = path.dirname(profileUpload)
console.log(parentDir)