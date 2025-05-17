// --- DATE METHODS ---
// 1
let dObj = new Date();
// 2
let dStr = new Date().toString();
// 3
let day = new Date().getDay();
// 4
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Today is: " + dayNames[day]);
// 5
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
// 6
let later = new Date(2020, 11, 31);
// 7
let specificDate = new Date(1992, 1, 2);
// 8
alert(new Date() - new Date("Jan 1, 1980"));
// 9
let changeYear = new Date();
changeYear.setFullYear(2025);
// 10
function changeMonthToJanuary(date) {
  date.setMonth(0);
  return date;
}
// 11
// Use setDate() to change the day
let changeDay = new Date();
changeDay.setDate(5); // sets to 5th of the month
// 12
function setMinutesValue(date, min) {
  date.setMinutes(min);
  return date;
}
// 13
function addHours(date, hrs) {
  date.setHours(date.getHours() + hrs);
  return date;
}
// 14 - Age Calculator
function calculateAge(dob) {
  let diff = Date.now() - new Date(dob).getTime();
  let ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// --- FUNCTIONS CH. 35-37 ---
// 1
function displayAlert() {
  alert("Hello");
}
// 2
function askName() {
  let userName = prompt("Enter name:");
}
// 3
function parentFunction() {
  childOne();
  childTwo();
}
function childOne() { alert("Child One"); }
function childTwo() { alert("Child Two"); }
// 4
function namePrompt() {
  let name = prompt("Enter name");
  alert(name);
}
namePrompt();
// 5
function concat(a, b, c) {
  return a + b + c;
}
concat("x", "y", 5);
// 6
function concatParams(a, b) {
  let result = a + b;
  return result;
}
// 7
function multiplyThree(a, b, c) {
  let product = a * b * c;
  return product;
}
// 8
function averageArray(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}
// 9
function sumTwo(a, b) {
  return a + b;
}
// 10 [Repeated, so skipped — handled in #8]
// 11
let result = sumTwo(5, 10); // captured
// 12
function letterCount(word) {
  return word.length;
}
// 13
function setYear(date, year) {
  date.setFullYear(year);
  return date;
}
// 14
function getAgeFromDOB(dob) {
  return calculateAge(dob);
}
// 15
function checkPresence(word) {
  let arr = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
  return arr.includes(word);
}
// 16
function repeatLetter(letter) {
  return letter.repeat(10);
}
// 17
function reverseArray(arr) {
  return arr.reverse();
}
// 18
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}
// 19
function isPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
// 20
function titleCase(str) {
  return str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
