const name = "Shubh"
const repoCount = 2

/*
    1. outdated way of concatnating strings like this.
*/

// console.log(name + repoCount + " Value");

/*
    2. string interpolation: using back ticks(``) -> creates placeholders ${} in which variables can be injected to print its value.
*/

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

/*
    3. create an instance of object String: it will give you multiple properties and method to use.
*/

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
//doesn't modify the original string itself, instead, it returns a new string
console.log(gameName.indexOf('-'));     
//index starts from 0
console.log(gameName.charAt(8));

/*
    4.
    -> difference btw substring() & slice() -> in slice(), -ve number can be used
    -> in slice(), end index is included
    -> in substring(), end index is not included.
*/
const newString = gameName.substring(0, 5);
console.log(newString);

const anotherStringOne = gameName.slice(1, 8);
console.log(anotherStringOne);
const anotherStringTwo = gameName.slice(-8, 8);
console.log(anotherStringTwo);


/*
    5.
    trim() -> removes the whitespaces
*/
const name2 = "    Stuti    "
const name3 = "Soumya"
console.log(name2.trim());
console.log(name3.trim());

/*
    6.
    -> includes(): checks if given string present or not
    -> replace(): 
    -> split(): converts the string to array on the basis the division factor(given)
*/

const url = "https://shubh.com/shubh%20das"

console.log(url.replace('%20', '-'));

console.log(url.includes('das'));
console.log(url.includes('it'));
console.log(url.includes('.com'));

console.log(gameName.split('-'));