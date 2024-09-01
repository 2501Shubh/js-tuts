//High Order Array Loops

//--------<for of>----------

/*
    -> ["", "", ""]: applicable for array of strings, num etc
    -> [{}, {}, {}]: applicable for objects
*/


/*
    here, 
    greet = element
    greeting = object (not real object but the thing for which loop iterates)
    you don't have write any increment and condition, it will automatically done
*/

let greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);      //even the space is printed alag se
}

let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(`${num}`)
}


//--------------<MAP>---------------

//key-value pair, only unique elements(key) will be stored
//map are almost same as object but unique elements is the point of difference

const map = new Map()
map.set('IN', "Ind")  //('key', "value")
map.set('USA', "United States of America")
map.set('FR', "France") 
map.set('IN', "India")    //replaces the prior value of Ind to India, since key will be unique and stored only once
// console.log(map);


//for of with maps -> all the [key, value] pair will be printed just like this one by one
for (const key of map) {
    console.log(key)
}

//if want to display alag se, do destructure of element: access alag se key and value
for (const [key, value] of map) {
    // console.log(key, " :- ", value)
    // console.log(key) 
}



//------------<OBJECT>---------------
//Objects cannot be iterated using for of.

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA5',
    'game3': 'Stumble Guys'
}

/*
for (const [key, val] of myObject) {
    console.log(key, " :- ", val);
}
    myObject is not iterable using for of
*/



//---------<ARRAY>---------
const programming = ["js", "cpp", "java"]