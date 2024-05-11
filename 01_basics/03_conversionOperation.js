//  ****** CONVERSIONS ******

let score = 33

//number -> string

let convertScore1 = String(score)
// console.log(typeof score);
// console.log(typeof convertScore1);
// console.log(convertScore1);


let namePlease = "33"

//string -> number

// let convertName = Number(namePlease)
// console.log(typeof namePlease);
// console.log(typeof convertName);
// console.log(convertName);   -> NaN: Not A Number


//Convert to Boolean

//1 -> true; 0 -> false; "" -> false; "Shubh" -> true
let isLoggedIn = ""

let convertLoggedIn = Boolean(isLoggedIn)
// console.log(typeof convertLoggedIn);
// console.log(convertLoggedIn);

//convert to Number

let isPresent = true
let checkIsPresent = Number(isPresent)

console.log(typeof checkIsPresent)
console.log(checkIsPresent)

let a = null
console.log(typeof a);  //type: object

let convertA = Number(a)

console.log(typeof convertA)
console.log(convertA)   //null means empty but due to conversion it was made 0, which is wrong

/*
    -> we are asked to return the temp
    -> temp is null(this means we dont have the temperature deets)
    -> in that case, if we return 0, it will be wrong!
*/

let b = undefined
console.log(typeof b)   //type: undefined

let convertB = Number(b)

console.log(typeof convertB);
console.log(b);


//  ****** OPERATIONS ******

// console.log(3+3);
// console.log(3*3);
// console.log(3-3);
// console.log(3**3);   -> power
// console.log(3/3);
// console.log(3%3);    -> modulus

//if you write string at first, whole operation would be treated and evaluated as string
//if number is at first, then treated and evaluated as number 

// console.log("2" + 2);        -> 22
// console.log(2 + 1 + "2");    -> 32(as number first)
// console.log("2" + 1 + 2);    -> 212(as string first)

console.log(+true);     //another way to convert into Number


//  ****** PREFIX & POSTFIX ******

//PREFIX
// let x = 3
// let y = x++     -> value is not incremented here, first use then update
// console.log(x);
// console.log(y);

//POSTFIX
// let a = 3
// let b = ++a    ->  first update(increment), then use
// console.log(a);
// console.log(b);