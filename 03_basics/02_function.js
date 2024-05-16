/*
    Obtain array & object in function
*/

//Object
const user = {
    username: "Shubh",
    age: 22
}

function handleObject(anyObject)
{
    console.log(anyObject.username); 
    console.log(`My name is ${anyObject.username} and my age is ${anyObject.age}`);
    console.log(anyObject);
}
handleObject(user)  //Way 1

handleObject({
    username: "abc",
    age: 12
})  //Way 2


//Array
const fruits = ["apple", "orange", "mango"]

function handleArray(getArray)
{
    return getArray[1]
}

console.log(handleArray(fruits));   //Way 1
console.log(handleArray([1, 2, 3, 4]));    //Way 2