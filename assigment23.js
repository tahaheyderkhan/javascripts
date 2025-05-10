// Chapter 22–25: Strings

// 1. Fix method call
var allLower = userInput.toLowerCase();

// 2. Convert x to lowercase
x = x.toLowerCase();

// 3. Convert y to uppercase
y = y.toUpperCase();

// 4. Convert variable to lowercase and assign to another
var lower = someVariable.toLowerCase();

// 5. Array element to lowercase
var lower = array[0].toLowerCase();

// 6. Alert uppercase version
alert(myVar.toUpperCase());

// 7. Capitalize cityName
var cityName = "kaRacHi";
cityName = cityName[0].toUpperCase() + cityName.slice(1).toLowerCase();

// 8. Slice "ap" from "captain"
var sameWords = "captain";
var slice = sameWords.slice(1, 3);

// 9. Get length of string
var length = myString.length;

// 10. Slice middle of "elephant"
var animal = "elephant";
var seg = animal.slice(2, 6);

// 11. Length to another variable
var length = str.length;

// 12. Slice excluding first and last 3
var middle = str.slice(1, str.length - 3);

// 13. indexOf "be"
var text = "To be or not to be.";
var indx = text.indexOf("be"); // 3

// 14. lastIndexOf "be"
indx = text.lastIndexOf("be"); // 16

// 15. Last "go" index
indx = text.lastIndexOf("go");

// 16. Check if indexNum exists
if (str[indexNum] !== undefined) {
    // do something
}

// 17. charAt index 2
"abcde".charAt(2); // "c"

// 18. 10th character to cha
var cha = text.charAt(9);

// 19. Last character to x
var x = str.charAt(str.length - 1);

// 20. 5th char to cha
var cha = input.charAt(4);

// 21. If 3rd char is a
if (myStr.charAt(2) === 'a') {
    // do something
}

// 22. Loop over string
for (var i = 0; i < myStr.length; i++) {
    myArray[i] = myStr.charAt(i);
}

// 23. Replace "no" with "yes"
var revisedReply = reply.replace("no", "yes");

// 24. Replace "1" with "one"
var newStr = str.replace("1", "one");

// 25. Replace all "a" with "z"
var y = x.replace(/a/g, "z");

// Chapter 26: Rounding Numbers

// 1. Round to nearest
var rounded = Math.round(num);

// 2. Round up
var roundNum = Math.ceil(origNum);

// 3. Round down
var roundNum = Math.floor(origNum);

// 4. Round and assign
var rounded = Math.round(myNum);

// 5. Round .5 to 0
var result = Math.floor(0.5);

// Chapter 27: Random Numbers

// 1. Random 1 to 50
var rand = Math.floor(Math.random() * 50) + 1;

// 2. Random number to variable
var rand = Math.random();

// 3. Dice (1-6)
var dice = Math.floor(Math.random() * 6) + 1;

// 4. Toss
var toss = Math.random() < 0.5 ? "Heads" : "Tails";

// Chapter 28-29: Conversions

// 1. String to int
parseInt("123");

// 2. Function to int
function toInteger(str) {
    return parseInt(str);
}

// 3. String to float
parseFloat("3.14");

// 4. Check if convertible
if (!isNaN(Number(str))) {
    var num = Number(str);
}

// 5. Number to string
String(42);

// 6. Function to string
function toString(num) {
    return num.toString();
}

// 7. Decimal string to int
parseInt("3.14"); // 3

// Chapter 30: Decimal Precision

// 1. Round to 4, to string
var newNum = num.toFixed(4).toString();

// 2. Round to 2, back to number
num = Number(num.toFixed(2).toString());

// 3. Test if rounded num > 4 chars
if (num.toFixed(2).toString().length > 4) {
    // do something
}

// 4. Alert 2-decimal places
var myNum = 3.14159265;
alert(myNum.toFixed(2).toString());
