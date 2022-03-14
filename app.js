//Regular function
// function add() {
//     var num1 = 50;
//     var num2 = 20;
//     console.log(num1 + num2);
//     console.log(num1 - num2);
// }
// add();
//-----------------------------------------

//Paramerized function:
// function substract(a, b) {
//     console.log(a - b);
// }
// substract(40, 10);
// substract(33, 11);

//-----------------------------------------

//Passing function as a value:

// function division() {
//     var num1 = 50;
//     var num2 = 20;
//     console.log(num1 / num2);
//     return num1 / num2;
// }

// var result = division();
// console.log(result);
// console.log(result + 10);
//-----------------------------------------

//Self invoking or anonymous function
// (function() {
//     var num1 = 50;
//     var num2 = 20;
//     console.log(num1 + num2);
// })();
// //Self invoking or anonymous function with parameters
// (function(a, b) {
//     console.log(a + b);
// })(2, 2);
//-----------------------------------------

//Calling function from an event
// function display() {
//     console.log("hello");
//     document.body.style.backgroundColor = "red";
//     alert("hello");
// }

//Tasks

// function displayOnload() {
//     console.log("Onload");
//     document.body.style.backgroundColor = "grey";
// }

// function display() {
//     console.log("clicked");
//     document.body.style.backgroundColor = "white";
// }

// function doubleClick() {
//     console.log("double clicked");
//     document.body.style.backgroundColor = "white";
// }

// function favColor() {
//     document.body.style.backgroundColor = "orange";
// }

// function display1() {
//     document.body.style.backgroundColor = "blue";
// }

// function formSubmit() {
//     document.querySelector("#demo1").textContent = "Form Submitted...";
//     document.querySelector("#demo1").style.color = "white";
// }
//-----------------------------------------
//create parametized method to multiply 3 numbers

// function toMultiply(a, b, c) {
//     console.log(a * b * c);
// }
// toMultiply(2, 3, 4);
// //-----------------------------------------
// //divide;

// function todivide(a, b) {
//     console.log(a / b);
// }
// todivide(23, 50);
// //-----------------------------------------
// //create a method to add background color to div element
// function bgDiv() {
//     document.querySelector("#bg").style.backgroundColor = "grey";
// }
// bgDiv();
//-----------------------------------------
//write a js method, when user click on button, display random interger below it.
// function randomInt() {
//     var x = Math.floor(Math.random() * 5 + 1);
//     document.getElementById("random").textContent = x;
//     //console.log(x);
// }
//-----------------------------------------
// write js function to format number up to specified decimal places.?????
// function toDecimal(a) {
//     console.log(a.toFixed(2));
// }
// toDecimal(59.87676);
//-----------------------------------------
// write function to convert negative number to postive number
// function toPostive(a) {
//     console.log(Math.abs(a));
// }
// toPostive(-7);
//-----------------------------------------
// write function to generate random background color of body?????
//???????????????
//-----------------------------------------
// task on function and date
// UTC date methods //get information in UTC format
// var d = new Date();

// console.log(d.toUTCString());
// console.log(d.getUTCDate());
// console.log(d.getUTCMonth());
// console.log(d.getUTCFullYear());
// console.log(d.getUTCHours());
// console.log(d.getUTCMinutes());
// console.log(d.getUTCSeconds());
//-----------------------------------------

//write js function to get current date
// function currentDate() {
//     console.log(new Date());
// }
// currentDate();
//-----------------------------------------

//write js function to get month name from a particular date?????
// var d = new Date();

// function monthName() {
//     console.log(d.getMonth());
// }
// monthName();
//-----------------------------------------

//write js function add specified minutes to date object??????
// function minToDate() {
//     var d = new Date();
//     console.log(d.getTime()+ 10*1000);
// }
// minToDate();

//from tutor
// var minutes = function(dt, min) {
//     return new Date(dt.getTime() + min * 60 * 1000);
// };
// console.log(minutes(new Date(), 30).toString());

//-----------------------------------------

// write js function to compare dates(equal, greater)??????
// function compareDates() {
//     var d = new Date();
//     var demoDate = d.setDate(2021 - 3 - 6);
//     // console.log(demoDate > d); // ? ? ? ? ? ? ? ? ?
//     console.log(d.getFullYear() > 2022);
//     console.log(d.getFullYear() >= 2022);
//     console.log(d.getFullYear() < 2022);
// }
// compareDates();