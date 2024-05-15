const declaration1 = new Object()
const declaration2 = {}

//Both act same -
// console.log(declaration1);
// console.log(declaration2);

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shubh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

/*
    We can have multiple objects within object.
*/
const regularUser = {
    email: "user1@gmail.com",
    username: {
        name: {
            firstname: "Shubhrangini",
            lastname: "Das"
        }
    }
}
// console.log(regularUser.username.name.firstname);

/*
    To combine multiple objects:
*/
const obj1 =
{
    1: "a",
    2: "b"
}

const obj2 =
{
    3: "c",
    4: "d"
}

const obj3 =
{
    5: "e",
    6: "f"
}

/*
    1. 
    -> will be combined whole as an object only and not individually
*/
const obj4 = {obj1, obj2, obj3}
// console.log(obj4);

/*
    2.
    Object.assign(target_object, source_object)
    -> where all the properties within source_object will be added to target_object individually.
*/
const obj5 = Object.assign(obj1, obj2, obj3)
// console.log(obj5);
// console.log(obj1);
console.log(obj5 === obj1); //true

//not a good practice rather use an empty object to store all the properties, this won't manipulate any other object
const obj6 = Object.assign({},obj1, obj2, obj3)
// console.log(obj6);
console.log(obj6 === obj1); //false


/*
    3.
    spread method-> ...
*/
const obj7 = {...obj1, ...obj2, ...obj3}
console.log(obj7);

/*
    Array of objects->
*/
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    },
]
console.log(users[1].email); 

/*
    Returns in array
*/
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/*
    De-Structure:
*/
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]