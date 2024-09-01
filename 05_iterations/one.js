//for loop

//normal for loop:
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

//for with array:
const myArr = ["Superman", "Batman", "Flash"]
for (let j = 0; j < myArr.length; j++) {
    console.log(myArr[j]);
}

//for with if condition:
for(let k = 1; k <= 10; k++)
{
    // if(k==5)
    // {
    //     console.log("5 is the best number");
    // }
}
// console.log(k);  -> k is not defined


//for with break and continue:
for (let i = 0; i < 10; i++) {
    if(i == 5)
    {
        // console.log(`${i} is the best number`);
        break
    }
    console.log(i); 
}

for (let i = 0; i < 10; i++) {
    if(i == 5)
    {
        // console.log(`${i} is the best number`);
        continue
    }
    console.log(i);
}