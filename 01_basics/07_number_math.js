const score = 400
console.log(score);

/*
    -> an instance of object Number is created
*/
const balance = new Number(145)
console.log(balance);

console.log(balance.toString().length);
//if we convert number -> string (we can use all the properties of string)
console.log(typeof balance)

console.log(balance.toFixed(2));    
//after decimal how many digits to be included

const otherNumber = 168.6745
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());     
//outside countries
console.log(hundreds.toLocaleString('en-IN')); 
//prefered in India


/*  ++++++++ MATH ++++++++  */

// console.log(Math); -> object Math with a lot of properties

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

/*
    random(): it returns number between 0 and 1
*/

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//minimum value: 10 and maximum value: 20