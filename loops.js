//for loop:
//1 to 10:
for(let i =1; i<=10;i++){
    console.log(i);
}

console.log("-----")

//for...of loop:In modern javascript way, we use for of loop.
//This is the better approach than the below index based approach.
const array = [1,2,3,4,5]
for( const e of array){
    console.log(e);
}

console.log("-----")

//index based for loop:
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

console.log("-----")

//while loop:
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

console.log("-----")

//to print even numbers:
let x = 2;
while(x<=10){
    console.log(x);
    x=x+2;
}

console.log("-----")

//do while loop:
let h = 1;
do{
    console.log(h);
    h++;
}
while(h<=10);

console.log("-----")

//break:
//1 to 100: print the hi when you see multiplication of 5 and break:
let num = 1;
while(num<=5){
    console.log(num);
    if(num % 5 == 0){
        console.log("hi");
        break;//break when number is divisible by 5
    }
    num++;
}

console.log("-----")

//for... of loop to iterate overa an array:
const browser = ["chrome","firefox","edge","IE"];
for(const e of browser){
    if(e == "edge"){
        console.log("Launch edge...");
        break;
    }
}

console.log("-----")

//for...in loop to iterate over an object:
const user = {
    name: "John",
    age: 30,
    city: "Toronto",
}
for(const key in user){
    console.log(key + " : " +user[key]);
} 

console.log("-----")

const br = ["chrome", "firefox", "edge", "IE"];
for(const ele in br){
    console.log(ele +" : " + br[ele]) // to print the values while using 'for in' loop, we have to use arrname[elemnt variable] ie, br[ele])
}


 