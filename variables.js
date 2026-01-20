//1. var: old way
//ES6
//scope: var
//functionally/locally + global scope

var x = 10; //globally declared or global scope
function test () {
    var y = 20;//functioanlly declared or functional scope
}
console.log(x);

var pop = "hi js";
function rel () {
    var top = "hello js";
    console.log(top);
}
console.log(pop);
rel(); // to call a variable declared inside a function

//recdeclaration of variable is possible in js with the var keyword
//redeclaration and reinitialization are possible in js.
//redeclaration means declaring a variable again using var
//reinitialization means assigning a new value to an already declared variable.
var browser = "chrome"
var browser = "firefox" // Ex of redeclaration
browser = "edge" // Ex of reinitialization
console.log(browser);

/////
var g;
console.log(g);//undefined
g = "hello world";
console.log(g);

//issue with var. Why we should not use var in js???
//In modern js, we wont use var keyword to declare variables.
//Since var keyword allows redeclaration it is not used in modern js.
//Below is an example:
var flag = "Hey Dad";
var t1 = 4;
if(t1 > 3){
    var flag = "Hey Mom";
}
console.log(flag);

//let:
//scope: block scoped
let m = "hey aswathy"
let time = 4;
if(time > 3){
    let message = "hey how are you?";
    console.log(message);
}
console.log(m) // i am print this because let m is defined oustside the block (i.e. { })
//console.log(message);// this line gives error because let message is defined inside the block (i.e. {})

//var can be redeclared and reinitialized 
//let cannot be redeclared but it can be reinitialized

//const: It is like final keyword in java , it cannot be reassigned.Once it is declared it is declared.
const mg = "hey i am here";
//mg = "hey i am away"; 
console.log(mg);

// var and let can be declared without giving any values.But for const, value must be assigned.
//Ex:
var y;
console.log(y)
//Ex:
let z;
console.log(z);
//Ex:
const a = 100;
console.log(a);








