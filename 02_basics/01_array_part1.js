/*
    In Js,
    Array is a collection of elements of different datatypes!
    -> number, string, bool, for that fact even array itself can be an element
*/

//1st Way:
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Spiderman", "Batman"]

//2nd Way:
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);   -> access elements using index

/*
    Array Methods->
*/

/*
Manipulates the existing array(changes made in the actual array).
    -> push(): push a new element at the back
    -> pop(): pop out the last element
*/
myArr.push(6)
myArr.push(7)
myArr.pop()

/*
Manipulates the existing array.
    -> unshift(): adds a new element at the front
    0> shift(): deletes the first element
*/
myArr.unshift(-1)
myArr.shift()

console.log(myArr.includes(3))  
//if present then returns true, else false.
console.log(myArr.indexOf(9));
//if present then returns the index, else returns -1.

const newArr = ["Shubh", "Stu", "Soumya", "Shruti"]
// myArr.push(newArr) -> push the newArr[] into myArr[] as an element

/*
Returns a new array, doesn't manipulate the existing array.
    -> join(): converts the array into string
*/
const arr = myArr.join()    

console.log(myArr);
console.log(arr);

/*
Difference between slice() and splice()
    -> slice(): - last range(end) is included.
                - returns a new array, doesn't manipulate the existing array.
    -> splice(): - last range(end) is not included
                 - manipulates the existing array, removes the spliced elements from the actual array.
*/

//slice():
console.log("Before slice(): ", myArr);
const myn1 = myArr.slice(0, 3)
console.log(myn1);
console.log("After slice(): ", myArr);


//splice(): 
console.log("Before splice(): ", myArr);
const myn2 = myArr.splice(0, 3)
console.log(myn2);
console.log("After splice(): ", myArr);

