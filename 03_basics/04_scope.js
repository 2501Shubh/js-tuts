/*
    -> why do we not use var?
    -> because, var has issue in block scope
*/

if(true)
{
    /*
        -> variable a & b should have existence limited to {}: scope
        -> but, var declared variables can be accessed outside the scope as well
        -> this is why we do not use it and prefer let & const over it.
    */
    var a = 300
    let b = 200
}

// console.log(a);    -> doesn't throw error  
// console.log(b);    -> throws error, as b is not defined globally

function outer(){
    const username = "hitesh"

    function inner(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    -> website is out of scope
    inner()
}
outer()
/*
    -> inner function can access the variables of outer function.
        - as it will be within {} of outer function.
    -> outer function cannot access the variables of inner function.
*/

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);    //possible
    }
    // console.log(website);    //out of scope
}
// console.log(username);   //out of scope

/*
    INTERESTING:
        -> Mini Hoisting
*/

/*
    when we declare function like below,
        it can be accessed even before declaration!
    
    WHY?
    
    -> because the function declaration is hoisted, this allows the function to be called before its declaration in the code.
*/

console.log(addone(5))
function addone(num){
    return num + 1
}

/*
    but when we declare function like below,
        it cannot be accessed before declaration!

    WHY?

    -> because the variable declaration (const addTwo) is hoisted, but its assignment to the function does not happen until the code execution phase.
    -> the variable addTwo is known to exist due to hoisting but it is undefined until the assignment execution.
*/

// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))

/*
    What is Hoisting?
        -> Hoisting is a JavaScript mechanism where variables and function declarations are *moved to the top of their containing scope* during the compilation phase, before the code is executed. 
        -> No matter where variables and functions are declared within a scope, they are *treated as if they were declared at the top of the scope*.
*/