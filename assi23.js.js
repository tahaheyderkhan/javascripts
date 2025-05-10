var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "!");




var userInput = prompt("Enter your favorite mobile phone model:");

var inputLength = userInput.length;

document.write("Your favorite phone is: " + userInput + "<br>");
document.write("Length of your input is: " + inputLength);




var word = "Pakistani";

var index = word.indexOf("n");

document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index);






var word = "Hello World";

var lastIndex = word.lastIndexOf("l");

document.write("String: " + word + "<br>");
document.write("Last index of 'l': " + lastIndex);



var word = "Pakistani";

var charAtIndex3 = word.charAt(3);

document.write("String: " + word + "<br>");
document.write("Character at index 3: " + charAtIndex3);




var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName.concat(" ", lastName);

alert("Hello, " + fullName + "!");






var city = "Hyderabad";

var replacedCity = city.replace("Hyder", "Islam");

document.write("City: " + city + "<br>");
document.write("After replacement: " + replacedCity);





var message = "Ali and Sami are best friends. They play cricket and football together.";

var updatedMessage = message.replace(/and/g, "&");

document.write("Original message: " + message + "<br>");
document.write("Updated message: " + updatedMessage);





var str = "472";

var num = Number(str);

document.write("Value: " + str + " (Type: " + typeof str + ")<br>");
document.write("Value: " + num + " (Type: " + typeof num + ")");




var userInput = prompt("Enter some text:");

var upperCaseInput = userInput.toUpperCase();

document.write("User Input: " + userInput + "<br>");
document.write("Upper Case: " + upperCaseInput);



var num = 35.36;

var numStr = num.toString();

var numWithoutDot = numStr.replace(".", "");

document.write("Original number: " + num + "<br>");
document.write("Converted to string and without dot: " + numWithoutDot);












