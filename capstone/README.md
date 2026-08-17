Building in an organization. mostly CRUD operation

CRUD operation --> Roles (Admin/User) --> Authentication JWT --> Middleware

Roles:
User, Admin --> for all app.

User can see only tasks created by them. 
Admin will be able to see all tasks, including user A and user B tasks. 

Authentication: until the user is logged in, they won't have access into the account. 

User can log in using email and password and also using google. 

Middleware will disable user A to see user B's tasks. 



## Features. 
- Admin can perform file upload features (multer, cloudinary)
- Admin will be able to upload assets (stored in cloudinary, and url stored in postgress)
- Background job feature. 


## File structure
Config - holds all configuration related information 
lib - handles all utils related folders. 
middleware - 
routes - we create all routes in the route folder. 


## App creation process
- load the env file unto src/config/env.ts. extract files from .env unto the /config/env.ts
- src/app.ts as entry file for express, while server.ts is 

- create a global error handler to handle error and notify user when there is a crash. Error handler give more information to users when something breaks.

* Pino - is an open-source logging utility for nodejs. 