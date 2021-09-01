console.log("HEllO");

// Variable
var b = "Smoothie";
console.log(b);

var smoothie = 44;
console.log(smoothie);

// Manipulate DOM with Javascript
// It's Just Fancy way of saying change HTML with javascript
// var age=prompt("Whats Your Age")
// document.getElementById("sometext").innerHTML =age;

// Numbers in javascript
console.log(5 * 10);
var num1 = 5.7;
num1++;
console.log(num1);
var num = 9;
num--;
console.log(num);

// Increment and Decrement number by you want
num += 10;
console.log(num);

/* Function
1. Create a Function
2. Call The Function
*/
// Create
function fun() {
  console.log("This is a function");
}
// Call
fun();

/* let's create a function that take in a name and return
and says hello followed by your name

*/

function greeting() {
  var name = prompt("WHat's You name");
  var result = "Hello" + " " + name;
  console.log(result);
}
// greeting()

// How do arguments work in function?
// How do we add 2 numbers together in a function

function sumNumber(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}
sumNumber(4, 40);
sumNumber("4", 40);
sumNumber(4, "40");
sumNumber("4", "40");

function greeting(yourname) {
  var result = "Hello" + " " + yourname;
  console.log(result);
}
// var nname= prompt("What's Your Name")
// greeting(nname)

// Loops

// While Loop

// var num =0
// while (num<100){
//     num+=1;
//     console.log(num);
// }

// For Loop

// for(let num=0; num<100; num++){
//   console.log(num);
// }

// Data types

// String in javascript
let fruits = "banana,apple,orange,blackberry";
let moreFruits = "banana\napple";
console.log(moreFruits);
console.log(moreFruits.length);
console.log(moreFruits.indexOf("an"));
console.log(moreFruits.slice(2, 6));
console.log(moreFruits.replace("ban", "123"));
console.log(moreFruits.toUpperCase());
console.log(fruits.split(" ")); // Split by comma
console.log(fruits.split("")); // Split by character

// Arrays in javascript

let veg = ["banana", "apple", "orange", "blackberry"];
veg = new Array("banana", "apple", "orange", "blackberry");

console.log(veg[2]);

veg[0] = "pear";
console.log(veg);

for (let i = 0; i < veg.length; i++) {
  console.log(veg[i]);
}

// Array comma methods
console.log("to String", veg.toString());
console.log(veg.join(" * "));
// console.log(veg,veg.pop(),veg )
console.log(veg.pop(), veg);
console.log(veg.push("blackberry"), veg);
veg.shift(); // remove first element from an array
console.log(veg);
veg.unshift("kiwi");
console.log(veg);

let vegetables = ["tomato", "potato", "onion"];
let allGroceries = veg.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let soomenumber = [5, 202, 43, 54, 53, 93, 5, 2, 53, 453];
console.log(
  soomenumber.sort(function (a, b) {
    return a - b;
  })
); // sorted in ascending order
console.log(
  soomenumber.sort(function (a, b) {
    return b - a;
  })
); // sorted in descending order

let emptyArray = new Array();
for (let num = 0; num < 11; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

// Objects in javascript
// dictionaries in python

let student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  height: 170,
  studentInfo:function (){
    return "Name : " + this.firstName + " " + this.lastName + "\n"+ "Age : " + this.age
  }
};
console.log(student.firstName);
console.log(student.lastName);
student.firstName = "Sachin";
student.lastName = "Madhukar"
console.log(student.firstName);
console.log(student.studentInfo());

// Conditionals , Control flows (if else)
// && AND
// || OR

var age = 34;

if (age>=18 && age<=35){
  status = 'Target Audience'
  console.log(status)
}else{
  status = "Not My Audience"
  console.log(status)
}

// Switch Statements
// Difference between WeekDay vs Weekend
// day 0 --> Sunday
// day 6 --> Saturday
switch (2){
  case 0:
    text = "weekend"
    break
  case 5:
    text="Weekend"  
    break
  case 6:
    text="Weekend"
    break
  default:
    text = "WeekDay"
}

console.log(text)