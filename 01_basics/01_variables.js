const accountId = 1
let accountEmail = "sd@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"

//accountId = 2     -> Assignment to constant variable not allowed.
accountEmail = "pd@gmail.com"
accountPassword = "121212"
accountCity = "Odisha"

console.log(accountId);

//multiple variables can be printed in table format
console.table([accountEmail, accountPassword, accountCity]);

/*
    -> var and let, both can be used for variable declaration (space in memory is reserved).
    -> let is block-scoped.
    -> var is globally scoped.
    
    -> prefer not to use var 
    -> because of issue in block scope and functional scope.
    -> Therefore, use only let for variable declaration.
*/