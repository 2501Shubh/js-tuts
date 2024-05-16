function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// console.log(sayMyName)   -> reference
// sayMyName() -> () is the execution which calls the function

function addTwoNumbers(number1, number2){   
    //here, within paranthesis is (parameters)

    // let result = number1 + number2
    // return result
    return number1 + number2
}
// addTwoNumbers(2, 3)  -> we need to print the returned result
console.log(addTwoNumbers(2, 4));   
console.log(addTwoNumbers(2, "4"))
//here, within paranthesis is (arguments sent)

//suppose, you do not pass any argument/value for the defined parameter of the function, for that case keep a default value

function myFunc(number = 2)
{
    console.log(number);
}
// myFunc()    -> default value will be printed
// myFunc(5)   ->  output: 5, default value will be overwritten

/*
    undefined is considered to be false
*/
function loginUserMessage(username)
{
    if(!username){
        //if undefined: 0, ! will make it 1, ask for a username and return
        console.log("Please enter a username!");
        return
    }
    //else 
    console.log(`${username} just logged in.`); 
}

loginUserMessage()  //undefined
loginUserMessage("Shubhrangini")

/*
    Shopping App: rest operator(...)
    -> you have to return the sum of the price of
    all items in cart
    -> number of parameters is not known
    -> use rest operator: ...
    -> it will form an array with all the prices obtained
    -> run a loop for its sumation
*/

function calculateCartPrice(...price)
{
    return price
}
console.log(calculateCartPrice(200, 300, 400, 1000));