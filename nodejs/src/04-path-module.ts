import path from 'node:path'

// Path is used to build and read file path.

// path.join use the right separator for the appropriate operating system. 
// It will not create the folder. it only create the path. Also, it does not check
// if file exist or not. 
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

const profileUpload = path.join(projectRoot, "uploads", "users", userId, fileName)
console.log('Join appropriate separators -',profileUpload)

// Get the basename of file 
/**
 * task - To get the basename of your file 
 * path.basename - Provides the visible filename of your path 
 */
const baseName = path.basename(profileUpload)
console.log("derive the basename of the file - ",baseName)

// Get the extension of file
const extensionName = path.extname(profileUpload)
console.log('get only the extension name', extensionName+"\n")

// Get the parent folder
const parentDir = path.dirname(profileUpload)
console.log('extract the parent directory of the file. ',parentDir)