const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

/*
1. marvel_heros.push(dc_heros)  
    -> push the whole array as an element
*/

console.log(marvel_heroes);
/*
2. console.log(marvel_heros[3][1]); 
    -> to access the element of array(dc_heroes) inside another array(marvel_heroes)
*/

const allHeros = marvel_heroes.concat(dc_heroes)
console.log(allHeros);
/*
3. concat(): concates the array's elements individually.
    -> doesn't manipulate the actual array
    -> returns a new array 
*/

const myHeroes = ["Mama", "Baba"]
const all_new_heros = [...marvel_heroes, ...dc_heroes, ...myHeroes]

console.log(all_new_heros);
/*
    ... -> spreads the elements of the array individually
    -> just like concate()
    -> with concat() we can concatenate one array whereas ...(spread) does it for many
*/

const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const arr2 = arr1.flat(Infinity)
console.log(arr2);
/*
flat():
    -> returns a new array, break all the subarray
    -> you can specify the depth of breaking subarrays or write infinity(break all depths)
*/


//checks if its array or not
console.log(Array.isArray("Hitesh"))
console.log(Array.isArray(arr1))

//converts string -> array
console.log(Array.from("Shubh"));

/*
    interesting one: object -> array
    you need to state the formation of array will be based on key(name) or value("Shubh")
*/
console.log(Array.from({name: "Shubh"}))
//returns an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/*
    isArray(): checks
    from(): form array from string, object etc.
    of(): form array of these elements
*/