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







function toTitleCase(str) {
    return str.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  var userInput = prompt("Enter some text:");
  
  var titleCaseInput = toTitleCase(userInput);
  
  document.write("User Input: " + userInput + "<br>");
  document.write("Title Case: " + titleCaseInput);

  


var num = 35.36;

var numStr = num.toString();

var numWithoutDot = numStr.replace(".", "");

document.write("Original number: " + num + "<br>");
document.write("Converted to string and without dot: " + numWithoutDot);





var username = prompt("Enter your username:");

function isValidUsername(username) {

  var specialChars = ["@", ".", ",", "!"];
  

  for (var i = 0; i < specialChars.length; i++) {
    if (username.indexOf(specialChars[i]) !== -1) {
      return false;
    }
  }
  return true; 
}

if (isValidUsername(username)) {
  document.write("Your username is valid: " + username);
} else {
  alert("Invalid username. Please enter a valid username without any special symbols (@, ., ,, !).");
}






var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Enter the item you want to search for:").toLowerCase(); 

function searchItem(arr, item) {
  return arr.some(element => element.toLowerCase() === item);
}

if (searchItem(A, userInput)) {
  alert(userInput + " is found in the list.");
} else {
  alert(userInput + " is not found in the list.");
}
