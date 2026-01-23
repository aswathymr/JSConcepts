//1. map:
let numbers1 = [1, 2, 3, 4, 5];
let doubleNumbers1 = numbers1.map((e) =>  e*2 ); 
console.log("One example of Map function: " +doubleNumbers1); // [2,4,6,8,10]

let numbers2 = [1, 2, 3, 4, 5];
function multiplyBy2(n){
    return n*2;
}
let doubleNumbers2 = numbers2.map(multiplyBy2);
console.log("Second example of Map function: " +doubleNumbers2); // [2,4,6,8,10]

//Fahrenheit -> Celsius
//(F-32) * 5/9

let fh = [32, 68, 104, 50, 212];
function toCelsius(f){
    return (f-32) *5/9;
}
let celsius = fh.map(toCelsius);
console.log("Fahrenheit to Celsius conversion using map: " +celsius); // [0,20,40,10,100]

//2. filter:
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = numbers.filter((e) => e%2 == 0);
console.log(evenNum); // [2,4,6,8,10]

let employee = [
    {name: 'Aswathy', age: 25, department: 'IT'},
    {name: 'John', age: 30, department: 'HR'},
    {name: 'Alice', age: 28, department: 'IT'},
    {name: 'Bob', age: 35, department: 'Finance'}
];
//let itEmployees = employee.filter((e) =>e.department === 'IT' && e.age > 26);
let itEmployees = employee.filter((e) =>e.department === 'IT' && e.age > 26);
console.log(itEmployees); // [{name: 'Alice', age: 28, department: 'IT'}]

//Difference between map and filter:
//map transforms each element in an array and returns a new array of the same length.
//filter keeps only elements that meet a certain condition and
// returns a new array that may be shorter than the original array.

//4. reduce: combines all elements in an array into a single value
//accum = running total (accumulator); 
//accum is a variable that stores the result as you go thhrough each element.
//Second parameter(num)  = starting value
//Returns single value (not array)
let num = [1,2,3,4,5];
let sum = num.reduce((accum,num) => accum+num, 0);
console.log("Sum of array elements using reduce: " +sum); // 15

//Interview question: Find the maximum value in an array using reduce
let values = [10,5,8,20,3];
let maxValue = values.reduce((max,num) => {
    if(num>max){
        return num;
    }
    else {
        return max;
    }
},values[0]);
console.log("Maximum value in the array using reduce: " +maxValue); // 20

//Find the minimum value in an array using reduce
let lists = [10,5,8,20,3];
let minValue = lists.reduce((min,num) => {
    if(num<min){
        return num;
    }
    else{
        return min;     
    }
}, lists[0]);
console.log("Minimum value in the array using reduce: " +minValue); // 3

//cart : name, price
let cartItems = [
    {name: 'item1', price: 100},
    {name: 'item2', price: 200},
    {name: 'item3', price: 150},
    {name: 'item3', price: 150}
];
let totalCost = cartItems.reduce((total,item) => total + item.price, 0);
console.log("Total cost of items in the cart using reduce: " +totalCost); // 600
