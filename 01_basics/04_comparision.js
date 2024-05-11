//simple comparisions(among same datatype): return true/false

// console.log(1 < 2);
// console.log(1 > 2);
// console.log(1 == 2);
// console.log(1 <= 2);
// console.log(1 != 2);
// console.log(1 >= 2);

//comparisions(different datatypes): In Js, the automatic conversion of string to Number takes place

console.log("2" > 1);   
console.log("02" < 1);

/*
    -> ==(equality check) & <, >, <=, >=(comparisions) work differently
    -> comparision convert null to a number, treating it as 0
    -> thatswhy, null == 0(false) and null <= 0(true)
*/

console.log(null > 0);
console.log(null < 0);
console.log(null == 0); //false
console.log(null >= 0); //true

//all false in case of undefined
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


//===(strict equality): checks the value as well as datatype, doesn't automatically converts the datatype(string to number, rather checks it)

console.log(2 === 2);   //true
console.log("2" === 2); //false