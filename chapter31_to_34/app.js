// Question 1
// var date = new Date();
// document.write(date);



// Question 2
// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August",
//     "September", "October", "November", "December"];
// alert(`Current month: ${months[date.getMonth()]}`);



// Question 3
// var date = new Date().toString();
// var day = date.slice(0, 3);
// alert(`Today is ${day}`);



// Question 4
// var date = new Date();
// var day = date.getDay();
// if (day === 0 || day === 6) {
//     document.write("It's Fun Day!");
// }



// Question 5
// var date = new Date();
// date = date.getDate();
// var message = "";
// if (date < 16) {
//     message = "First fifteen days of the month";
// }
// else {
//     message = "Last days of the month";
// }
// document.write(message);



// Question 6
// var date = new Date();
// var minutes = date.getTime() / (60 * 1000);
// document.write(`Current Date: ${date}<br />`);
// document.write(`Elapsed milliseconds since January 1, 1970: ${date.getTime()}<br />`);
// document.write(`Elapsed minutes since January 1, 1970: ${minutes}<br />`);



// Question 7
// var date = new Date();
// var hours = date.getHours();
// var AMOrPM = "";
// if (hours > 0 && hours < 12) {
//     AMOrPM = "It's AM";
// }
// else {
//     AMOrPM = "It's PM";
// }
// alert(AMOrPM);



// Question 8
// var laterDate = new Date("December 31, 2020");
// document.write(`Later Date: ${laterDate}`);



// Question 9
// var date1 = new Date("June 18, 2015");
// var date2 = new Date();
// var date1InMiliseconds = date1.getTime();
// var date2InMiliseconds = date2.getTime();
// var difference = date2InMiliseconds - date1InMiliseconds;
// var days = Math.floor(difference / (24 * 60 * 60 * 1000));
// document.write(`${days} days have passed since 1st Ramadan, 2015`);



// Question 10
// var referenceDate = new Date("October 10, 2015");
// var date = new Date("January 1, 2015");
// var referenceDateInMiliseconds = referenceDate.getTime();
// var dateInMiliseconds = date.getTime();
// var difference = referenceDateInMiliseconds - dateInMiliseconds;
// var seconds = difference / 1000;
// document.write(`On reference date ${referenceDate}, ${seconds} seconds had passed since
// beginning of 2015`);



// Question 11
// var date = new Date();
// document.write(`Current date: ${date}<br />`);
// var hours = date.getHours();
// var hour = 0;
// if (hours === 0) {
//     hour = 11;
// }
// else {
//     hour = hours - 1;
// }
// date.setHours(hour);
// document.write(`1 hour ago, it was ${date}`);



// Question 12
// var date = new Date();
// document.write(`Current date: ${date}<br />`);
// var year = date.getFullYear();
// date.setFullYear(year - 100);
// document.write(`100 years back, it was ${date}`);



// Question 13
// var age = parseInt(prompt("Enter your age"));
// var date = new Date();
// var currentYear = date.getFullYear();
// var birthYear = currentYear - age;
// document.write(`Your age is ${age}<br />`);
// document.write(`Your birth year is ${birthYear}`);



// Question 14
// var units = 400;
// var chargesPerUnit = 10;
// var surcharge = 300;
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<h3>Customer Name: ABC</h3>")
// document.write("<h3>Month: June</h3>")
// document.write(`<h3>Number of units: ${units}</h3>`);
// document.write(`<h3>Charges per unit: ${chargesPerUnit}</h3>`);
// document.write(`<h3>Net Amount Payable (within due date): ${(chargesPerUnit * units).toFixed(2)}</h3>`);
// document.write(`<h3>Late Payment Surcharge: ${surcharge}</h3>`);
// document.write(`<h3>Gross Amount Payable (after due date): 
// ${((chargesPerUnit * units) + surcharge).toFixed(2)}</h3>`);
