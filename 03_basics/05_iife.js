/*
    Immediately Invoked Function Expression:
        -> it creates a new scope, encapsulate variables, and avoid polluting the global namespace.
        -> both normal functions and IIFEs provide local scope.
        -> IIFEs offer the additional benefit of immediate execution and temporary variable isolation, especially for avoiding variable name collisions and managing memory more efficiently.
*/

//normal function:
function chai()
{
    console.log("Welcome to Chai & Code Tutorials!");
}
chai();

//named IIFEs:
(function hello()
{
    console.log("Hello World!");
})();

/*
    first (): function declaration
    second (): execution
    ; -> marks the end of the iife 
*/

//un-named arrow IIFEs:
(() => 
{
    console.log("Hello World!");
})();

//un-named arrow IIFEs with parameters:
((username) => 
{
    console.log(`${username}, Welcome to Chai aur Code!`);
})("Shubhrangini");

/*
    NOTE:
    In JavaScript, variables declared outside of any function are global variables, meaning they can be accessed and modified from anywhere in your code. This can lead to unintended consequences, such as *variable name collisions or unintentional modification of global state*.

By wrapping code inside an IIFE, you create a new scope for your variables.
*/