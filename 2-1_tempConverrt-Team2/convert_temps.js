/*
    CIS 124: Intro to JavaScript
    Extra 2-1: Convert Fahrenheit to Celcius
    Team 2, 16OCT2022
    Annamae Nguyen & Dominique Tepper

Write the code for the temperature converted within the script element. Develop the application to allow the users to:
    1. enter decimal numbers
    2. display the Fahrenheit value entered by the user
    3. display calculated Celsius value rounded to 1 digit

    C = ((F - 32) * 5) / 9;
*/

"use strict";

let tempF = 0;

// do-while loop that accepts valid decimal inputs
do {
    tempF = parseFloat(prompt("Enter temperature in Fahrenheit."));
}
while ( isNaN(tempF));

// converts F to C
let tempC = ((tempF - 32) * 5) / 9;

// displays user input in Fahrenheit and C output rounded to 1 digit
document.write(`<p>${tempF.toFixed(1)} Fahrenheit = ${tempC.toFixed(1)} Celsius</p>`);