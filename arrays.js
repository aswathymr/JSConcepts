//Declaration of an array:
let myArray = []; //an empty array.
let numbers = [1,2,3,4,5];//an array with numbers.
let fruits  = ["Apple", "Banana", "Orange"]; //an array with strings.

let lang = ["Java", "Python", "Js"];
// Below are the methods available in array in JS.  
//1.push: adds one or more elements to the end of an existing array
// and returns the new length of the modified array.
lang.push("Ruby");
lang.push("HTML","C#");
console.log(lang);

//2. pop: removes the last element of an array and returns that element.
let numerals = [1,2,3,4,5];
let lastElement = numerals.pop();
console.log(numerals);
console.log(lastElement);

//3. shift: removes the first element of an array and also returns that first element.
let days = ["Monday", "Tuesday", "Wednesday"];
let firstDay = days.shift();
console.log(firstDay);
console.log(days);

//4. unshift: adds one or more elements to the beginning of an array and return the new length of the array.
let colors = ['red', 'pink', 'orange', 'black'];
console.log(colors.length);
colors.unshift('blue', 'brown');
console.log(colors);
console.log(colors.length);

//5. splice: allows to add or remove elemnts from the specific index in the array.
let animals = ['dog', 'cat', 'elephant', 'lion'];
animals.splice(1,1, "tiger"); // it starts from the index 1( i.e from cat) and remove 1 element( i.e remove cat) and 
// add tiger to the place where element(i.e cat) is deleted.
console.log(animals);

//6. slice: returns a copy of an existing array from the speciified start index to end index (not including end index).
let vehicles = ['car', 'bus', 'bike', 'truck', 'scooter'];
let newVehicles = vehicles.slice(1,4); // it starts from index 1 (i.e bus) and goes upto index 4 but not including index 4 (i.e scooter) 
console.log(newVehicles);

//7. concat: merges two or more arrays and returns a new array.
let firstArray = [1,2,3];
let secondArray = ['a','b','c','d'];
let mixedArray = firstArray.concat(secondArray);
console.log(mixedArray);

//8. indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present.
let color = ['red', 'blue', 'green', 'yellow','green'];
let greenIndex = color.indexOf('green');
console.log(greenIndex); // it returns the first index of green i.e 2

let aswathyIndex = color.indexOf('aswathy');
console.log(aswathyIndex); // it returns -1 as aswathy is not present in the array.

let secondGreenIndex = color.indexOf('green',3); // searching for second green index after index 3
console.log(secondGreenIndex); // it returns 4

//line 58 to 59 can be written in another way: this is the better approach because if any new value is inserted before the second green,
// then the index will change and the above approach will fail.
let secondGreenIndex2 = color.indexOf('green', color.indexOf('green') + 1);
console.log(secondGreenIndex2);

//9. includes: verifies whether an array contians a certain element and returns true or false.
let pets = ['cat', 'dog', 'fish'];
let hasDog = pets.includes('dog');
console.log(hasDog); // true
//approach to check if both dog and cat are present in the array
if(pets.includes('dog') && pets.includes('cat')){
    console.log("I have both dog and cat");
}

//10. foreach: executes a provided function once for each array element.
let cities = ['London', 'Paris', 'New York'];
cities.forEach((e) => {
    console.log(e);
});