// Question 1
// function showDate() {
//     document.write(new Date());
// }
// showDate();



// Question 2
// function welcome() {
//     var firstName = prompt("Enter First Name");
//     var lastName = prompt("Enter Last Name");
//     document.write(`Welcome, ${firstName} ${lastName}`);
// }
// welcome();



// Question 3
// function add() {
//     var num1 = Number(prompt("Enter Number 1"));
//     var num2 = Number(prompt("Enter Number 2"));
//     return num1 + num2;
// }
// var sum = add();



// Question 4
// function calculator(num1, num2, operator) {
//     if (operator === "/")
//         return num1 / num2;
//     if (operator === "*")
//         return num1 * num2;
//     if (operator === "+")
//         return num1 + num2;
//     if (operator === "-")
//         return num1 - num2;
//     else
//         return "Invalid Operator!";
// }
// var num1 = 5;
// var num2 = 5;
// var operator = "+";
// var answer = calculator(num1, num2, operator);
// document.write(`${num1} ${operator} ${num2} = ${answer}`);



// Question 5
// function square(number) {
//     return number ** 2;
// }
// var num = 3;
// document.write(`Square of ${num} is ${square(num)}`);



// Question 6
// function factorial(number) {
//     var ans = 1;
//     for (let index = 1; index <= number; index++) {
//         ans = ans * index;
//     }
//     return ans;
// }
// var number = 3;
// document.write(`${number} factorial is ${factorial(number)}`);



// Question 7
// function printNumbers(startNumber, endNumber) {
//     for (let index = startNumber; index <= endNumber; index++) {
//         document.write(`<h3>${index}</h3>`)
//     }
// }
// printNumbers(1, 10);



// Question 8
// function calculateHypotenuse(base, perpendicular) {
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     return hypotenuse.toFixed(2);
// }
// function calculateSquare(number) {
//     return number ** 2;
// }
// var base = Number(prompt("Enter base value"));
// var perpendicular = Number(prompt("Enter perpendicular value"));
// document.write(`Base: ${base}<br />`);
// document.write(`Perpendicular: ${perpendicular}<br />`);
// document.write(`Hypotenuse: ${calculateHypotenuse(base, perpendicular)}`);



// Question 9
// function area(width, height) {
//     var area = width * height;
//     return area;
// }
// var area1 = area(2, 4);
// var width = 4;
// var height = 8;
// var area2 = area(width, height);
// document.write(`Area 1: ${area1}<br />`);
// document.write(`Area 2: ${area2}`);



// Question 10
// function isPalindrome(word) {
//     var reversedWord = "";
//     word = word.toLowerCase();
//     var letters = word.split("");
//     for (let index = (word.length - 1); index >= 0; index--) {
//         reversedWord = reversedWord + letters[index];
//     }
//     return word === reversedWord;
// }
// var word = "madam";
// var result = isPalindrome(word);
// if (result) {
//     document.write(`${word} is a palindrome.`);
// }
// else {
//     document.write(`${word} is not a palindrome.`);
// }



// Question 11
// function toTitle(string) {
//     var words = string.split(" ");
//     var titledString = "";
//     for (const word of words) {
//         var firstCapitalLetter = word[0].toUpperCase();
//         var remainingLetters = word.slice(1);
//         titledString = titledString + firstCapitalLetter + remainingLetters + " ";
//     }
//     document.write(`Input: ${string}<br />`);
//     document.write(`Output: ${titledString}`);
// }
// toTitle("honesty is the best policy");



// Question 12
// function longestWord(string) {
//     var words = string.split(" ");
//     var longestWord = words[0];
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     document.write(`Input: ${string}<br />`);
//     document.write(`Longest Word: ${longestWord}<br />`);
// }
// longestWord("Web Development Course");



// Question 13
// function countLetter(string, letter) {
//     var count = 0;
//     string = string.toLowerCase();
//     letter = letter.toLowerCase();
//     var letters = string.split("");
//     for (const l of letters) {
//         if (letter === l) {
//             count++;
//         }
//     }
//     document.write(`Input: ${string}<br />`);
//     document.write(`'${letter}' occurrences: ${count}`);
// }
// countLetter("hello hello hello", "e");



// Question 14
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write(`<h1>The circumference is ${circumference.toFixed(2)}</h1>`);
// }
// function calcArea(radius) {
//     var area = Math.PI * (radius ** 2);
//     document.write(`<h1>The area is ${area.toFixed(2)}</h1>`);
// }
// calcCircumference(3);
// calcArea(3);