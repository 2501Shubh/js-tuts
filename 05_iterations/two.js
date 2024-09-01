//while loop

let i=0
while (i<=10) {
    console.log(`Value of index is ${i}`);
    i = i+2;
}



//do while loop: will be executed for atleast once before checing the condition

let score = 11
do {
    console.log(`Score is ${score}`)    //value doesn't satisfies the condition but still gets printed 
} while (score<=10)