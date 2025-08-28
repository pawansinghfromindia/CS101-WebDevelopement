/*
 Variables and Constant in JS

User inputs info, to process these we need to store those info in memory space for time we need something known as  Variables and Constants.

Later on based on requirement  we store them in database, get back in optimize way. This is the whole game in programming.

Constant - store the data which are Once declare, we don't change time & again
Variable - Store the data which might be update or change.

Naming convention of variables

Keywords are already defined under JavaScript compiler NodeJS or V8 Engine Syntax. keyword1 then do this, keyword2 then do that.....

In JS, there is only one way to declare a constant that is with keyword const
```const accountId = 101;```
There are 2 ways of declaring variables - 
let 
var - Now we don't use var. There was a small problem with JavaScript that It didn't know the Scope in initial days. So It overwrite it again & again if somebody use the same variable. Eventually they recommended to simply use let. It solved the problem of scope.

NOTE : Prefer not to use var because of issue in block scope and functional scope

 
```let accountEmail = "user@email.com";```


In JS, since it is so safe that sometime without writing anything (let/var/const) reserve a variable memory although this is not a good way.
``` accountCity = "Mumbai"; ```

If you declare a variable and didn't assign anything, JS considered it as undefined.
``` let accountState; ```
*/

const accountId = 101;
let accountEmail = "user@email.com";
var accountPassword = "012345";
accountCity = "Mumbai";

let accountState;

// accountId = 105; //not allowed
console.log(accountId);

accountEmail = "newuser@email.com";
console.log(accountEmail);

accountPassword = "987654";
accountCity = "New Delhi";

console.log(accountPassword + " and " + accountCity);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
