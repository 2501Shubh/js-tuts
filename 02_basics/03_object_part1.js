/*
    1.
    singleton formation: Object.create
    -> when declaration done using constructor
*/

/*
    both Object literals way and Object constructor way are mostly same, only thing that differs is singleton.
*/
const mySym = Symbol('key1')
console.log(typeof mySym);

const JsUser = 
{
    name: "Shubhrangini",
    "status": "Single",     //key is given in "" format 
    [mySym]: "keys",    //syntax for symbol declaration within object, now referred as symbol
    age: 22,
    location: "Kolkata",
    email: "S@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]   //array can also be a property of object
}

// console.log(JsUser);

/*
    2.
    Access: 2 ways
*/
//dot
console.log(JsUser.age);    

//bracket: should prefer this format bec if the key is given "" format then you cannot access it using (.) way
console.log(JsUser["status"]);
console.log(JsUser["email"]);


/*
    3.
    if you are asked to write Symbol as the property of Object
    [mySym]: "" -> write within []
*/
console.log(JsUser[mySym]);

/*
    4.
    To freeze/prevent any further changes in object property:
*/
JsUser.email = "priti@gmail.com"
// Object.freeze(JsUser);
JsUser.email = "dasS@gmail.com"
// console.log(JsUser);

/* 
    5.
    functions within object
*/
JsUser.greetings = function()
{
    console.log("Hello World!");
}
console.log(JsUser.greetings());

JsUser.greetings2 = function()
{
    console.log(`Hello JS user, this is ${this.name}`);     //this keyword to refer current object
}
console.log(JsUser.greetings2());