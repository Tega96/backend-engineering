## libuv 
This is a native library that is used by nodejs. 

It helps nodejs handle async operations accross different operating systems. It provides the following.
- event loop
- worker thread pool
- timers
- async i/0 operations

v8 does not provide fs operation,
network handling, 
timers,
general event loop for node js apis.

Thus node js needs another layer to coordinate runtime features. 

Event loop check for the following. 
1. Completed i/o operations
2. timers - checks if some timers are in ready state
3. pending callbacks
4. socket activities.


thread pool
libuv provides a shared worker thread pool.
Thread pools are used by those operations that cannot be handled efficiently. 
Thread pool is needed when:
- many file system operations
- cryptographic operations
- compression related work

timers
libuv helps nodejs track timer and determine when that particular timer is going to execute. 
eg. timeer -> 5  sec delay -> runtime records the timer and continue processing other task untile the timer is eligible to be executed.