var name = prompt("Enter Your Name");
var englishMarks = parseInt(prompt("How much do you scored in English "));
var mathMarks = parseInt(prompt("How much do you scored in Math "));
var sanskritMarks = parseInt(prompt("How much do you scored in Sanskrit "));
var gujaratiMarks = parseInt(prompt("How much do you scored in Gujarati "));
var scienceMarks = parseInt(prompt("How much do you scored in Science "));

function calcPercentage  (marks1, marks2, marks3, marks4, marks5){
    var sum = marks1 + marks2 + marks3 + marks4 + marks5;
    return sum / 5;
}

var percen = calcPercentage(englishMarks, gujaratiMarks, mathMarks, sanskritMarks, sanskritMarks);

if (percen > 70) document.write("Distinction<br>");
else if (percen > 60) document.write("First class<br>");
else if (percen > 50) document.write("Second class<br>");
else if (percen > 35) document.write("Average<br>");
else document.write("Fail<br>");