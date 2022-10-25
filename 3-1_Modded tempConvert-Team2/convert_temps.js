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

Exer 3-1. Enhance F to C app
A. Add data validation that only accepts F temps between -100 and 212.
B. A dialog box should appear if entry is invalid
C. Add a loop so the user can do a series of calculations. Loop will be terminated when user inputs 999.
*/

"use strict";

let tempF = 0;

// 3-1C. Nguyen & Tepper, 17OCT2022.    
do {
 
    tempF = parseFloat(prompt("Enter temperature in Fahrenheit or 999 to exit."));

    // 3-1A. Nguyen & Tepper, 17OCT2022.
    if (tempF >= -100 && tempF <= 212) {
        // converts F to C. Nguyen & Tepper, 17OCT2022.
        let tempC = ((tempF - 32) * 5) / 9;
        
        // displays user input in Fahrenheit and C output rounded to 1 digit
        document.write(`<p>${tempF.toFixed(1)} Fahrenheit = ${tempC.toFixed(1)} Celsius</p>`);
    }

    // 3-1B. Nguyen & Tepper, 17OCT2022.
    else if (tempF <= -101 || tempF > 212 || isNaN(tempF)) {
        alert(`You entered ${tempF}. \nEntry must range from -100 to +212.`);
    }
}
while (tempF != 999);