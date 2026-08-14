How node js run the code. 

## Main js thread.
Javascript executes on one js thread. 

# V8 engine
parsing of js
executes js, 
manage call stack
heap memory and performance garbage collection. 

# Nodejs core apis
fs, http, streams, path, process, timers,
All The above are written in js.
Core apis cannot directly interact with the system, that is why we need the c++ binding as a mediator

## C++ bindings
Connects the javascript facing nodejs api to native functionality. ie it allows the javascript code to communicate with libuv, os apis, native libraries etc..  
C++ bindings enables communications from the node core apis to the libuv or the operating system library. 

## libuv 
This is a native library that is used by nodes. it provides the event loops, worker thread pool, timers, async i/0 handling

## os
does the low level work like reading and writing files,
tracking time, schedule threads, etc...

Nodejs coordinates these work, but the operating system process the actual system or process. 

JavaScript code -> V8 Engine
JavaScript code -> Nodejs core apis -> C++ bindings -> libuv -> operating systme. 

## How the internal flow works.
Operating system starts the nodejs process
Nodejs initializes the v8 engine and the libuv runtime event loop. 
Nodejs loads the app.js file, and v8 parse and execute the javascript
The JavaScript runs on main thread. This process will exist only when there is no active work