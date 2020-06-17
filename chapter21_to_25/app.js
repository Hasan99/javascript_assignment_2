// Question 1
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// alert(`Hello, ${fullName}`);



// Question 2
// var mobile = prompt("Enter your favorite mobile phone model");
// document.write(`My favorite phone is: ${mobile}<br />`);
// document.write(`Length of string: ${mobile.length}`);



// Question 3
// var word = "Pakistani";
// document.write(`String: ${word}<br />`);
// document.write(`Index of 'n': ${word.indexOf("n")}`);



// Question 4
// var word = "Hello World";
// document.write(`String: ${word}<br />`);
// document.write(`Last index of 'l': ${word.lastIndexOf("l")}`);



// Question 5
// var word = "Pakistani";
// document.write(`String: ${word}<br />`);
// document.write(`Character at index 3: ${word.charAt(3)}`);



// Question 6
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" ", lastName);
// alert(`Hello, ${fullName}`);



// Question 7
// var city1 = "Hyderabad";
// var city2 = city1.replace("Hyder", "Islam");
// document.write(`City: ${city1}<br />`);
// document.write(`After replacement: ${city2}`);



// Question 8
// var message1 = "Ali and Sami are best friends. They play cricket and football together.";
// var message2 = message1.replace(/and/g, "&");
// document.write(`Message: ${message1}<br />`);
// document.write(`After replacement: ${message2}`);



// Question 9
// var value1 = "472";
// var value2 = Number(value1);
// document.write(`Value: ${value1}<br />`);
// document.write(`Type: ${typeof (value1)}<br />`);
// document.write(`Value: ${value2}<br />`);
// document.write(`Type: ${typeof (value2)}`);



// Question 10
// var userInput = prompt("Enter something");
// var upperCase = userInput.toUpperCase();
// document.write(`User input: ${userInput}<br />`);
// document.write(`Upper case: ${upperCase}`);



// Question 11
// var userInput = prompt("Enter something");
// var titleCase = userInput.titleCase();
// document.write(`User input: ${userInput}<br />`);
// document.write(`Title case: ${titleCase}`);



// Question 12
// var num = 35.36;
// document.write(`Number: ${num}<br />`);
// num = num * 100;
// num = num.toString();
// document.write(`Result: ${num}`);



// Question 13
// var userName = prompt("Enter Username");
// var code = 0;
// for (let index = 0; index < userName.length; index++) {
//     code = userName.charCodeAt(index);
//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         alert("Please enter a valid username");
//         break;
//     }
// }



// Question 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// input = input.toLowerCase();
// var notAvailable = true;
// for (let index = 0; index < items.length; index++) {
//     if (input === items[index]) {
//         document.write(`${input} is available at index ${index} in our bakery`);
//         notAvailable = false;
//         break;
//     }
// }
// if (notAvailable) {
//     document.write(`We are sorry. ${input} is not available in our bakery`);
// }



// Question 15
// var password = prompt("Enter paassword");
// var haveAlphabet = false, haveNumber = false;
// if (password.length < 6) {
//     document.write(`Enter minimum 6 characters!<br />`);
//     document.write("Please enter a valid password!");
// }
// else {
//     var code = password.charCodeAt(0);
//     if (code >= 48 && code <= 57) {
//         document.write("Password cannot begin with a number!<br />");
//         document.write("Please enter a valid password!");
//     }
//     else {
//         for (let index = 0; index < password.length; index++) {
//             code = password.charCodeAt(index);
//             if (code >= 48 && code <= 57) {
//                 haveNumber = true;
//             }
//             else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//                 haveAlphabet = true;
//             }
//             else {
//                 haveAlphabet = haveNumber = false;
//             }
//         }
//         if (haveAlphabet && haveNumber) {
//             document.write("Valid Password!");
//         }
//         else {
//             document.write("Password must contain alphabets and numbers!<br />");
//             document.write("Please enter a valid password!");
//         }
//     }
// }



// Question 16
// var university = "University of Karachi";
// var letters = university.split("");
// for (const letter of letters) {
//     document.write(`${letter}<br />`);
// }



// Question 17
// var input = prompt("Enter something");
// document.write(`User input: ${input}<br />`);
// document.write(`Last character of input: ${input[input.length - 1]}`);



// Question 18
// var string = "the quick brown fox jumps over the lazy dog";
// var words = string.split(" ");
// var count = 0;
// for (const word of words) {
//     if (word === "the") {
//         count++;
//     }
// }
// document.write(`Text: ${string}<br />`);
// document.write(`There are ${count} occurrence(s) of word 'the'`);