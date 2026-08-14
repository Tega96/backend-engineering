## V8 engine
This is the javascript engine used by nodejs

How v8 execute javascript
1. V8 parses the javascript.
2. Creates an internal representation of the code called byte code
3. It executes the code. 
4. It optimises the frequent use
5. Manages the call stack, heap memory and call stack 



JavaScript -> Parser -> Abstract Syntax Tree -> Bytecode -> Interpreter -> Optimized machine code -> execute.

Parser = Understands the JS code
Abstract syntax tree = This will understand the structure and meaning of your program. eg `const total = price + tax `. This will understand that you're creating a total value from price and tax thus adding both of them. 
Abstract syntax tree also removes unecessary formating details eg space, etc...

Bytecode - Bytecode are lowerlevel internal format. converts to your js code to a code representation that v8 engine can understand. Bytecode is easier for the v8 engine to understand. 

Interpreter - Interpretes the code. 
Optimizer - optimizes your missing code,
