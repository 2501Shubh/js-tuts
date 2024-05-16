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
*/

console.log(addone(5))
function addone(num){
    return num + 1
}

/*
    but when we declare function like below,
        it cannot be accessed before declaration!
    WHY?
    -> because here a variable is holding function's value, so before declaration it cannot be accessed.
*/

// console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
