/*
    -> this keyword refers to the context(object) in which a function is executed. 
    -> this.value, where, this get replaced by the object and value is it's property.
*/

const user = {
    username: "Shubh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //When a function is called as a method of an object, 'this' keyword refers to the object that owns the method.

        // console.log(`${username} , welcome to website`);     -> look for username in this scope and say it is not defined

        console.log(this);
    }
}

// user.welcomeMessage()
user.username = "sam"   //change the value of username in current context(object) 
// user.welcomeMessage()

// console.log(this);
/*
    Browsers: window is global object.
    Here, where node is the environment, global object is {}(empty object)
*/

function chai1()
{
    let username = "hitesh"
    console.log(this);      //not empty, global object
    console.log(this.username);     //undefined
}

const chai2 = function () {
    let username = "hitesh"
    console.log(this);  //not empty, global object
    console.log(this.username);     //undefined
}

// chai1()
// chai2()

/*
    In Standalone function() that is not within any object:
        -> 'this' usually refers to the global object (in non-strict mode) or undefined (in strict mode)
*/

/*
    Arrow Function
*/
const chai3 = () =>
{
    console.log(this);  //empty object
}
// chai3()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,3));

//Shorter way of writing the above code.
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(1,2,3));

/*
    -> Explicit Return: 
        - if we write {} within arrow function, we will have to write 'return' keyword
    -> Implicit Return:
        - if we write () within arrow function, we don't have to write 'return' keyword
*/

//To return object from arrow function
const myObj = () => ({username: "hitesh"})
console.log(myObj())