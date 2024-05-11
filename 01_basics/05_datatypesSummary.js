/*
    based on how the data is stored in the memory space and how it is accessed, there are two types of datatypes:

    1. Primitive: number, string, boolean, null, undefined, symbol, bigInt
    -> stack memory is used
    -> variable is passed by value(copy of the value is sent)
    -> changes made in copy variable is not deflected in the actual variable

    2. Non-Primitive(Reference): array, object, function
    -> heap memory is used
    -> variable is passed by reference(actual address is sent)
    -> changes made are deflected in actual variable as well
*/

/*
    -> symbol is used to add uniqueness
    -> even if you add same string value, it will not return the same type
*/
let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id == anotherId);   //false
console.log(id === anotherId);  //false
console.log(typeof anotherId);

//bigInt:
let a = 123345677n  //syntax for bigint declaration

//NON-PRIMITIVE(all their types will be object): 

//Array(syntax):
const fruits = ["apple", "banana", "grapes", "mango"];
console.log(typeof fruits);

//Object(syntax):
let employee = {
    name: "Shubh",
    id: 1
}
console.log(typeof employee.name);
console.log(typeof employee);

//Function(syntax):
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);     //funtion object