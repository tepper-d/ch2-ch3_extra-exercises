/*
CIS 124: Intro to JavaScript
Extra 3-2: Convert number grades to letter grades
Team 2, 17OCT2022
Annamae Nguyen & Dominique Tepper

A. App should run while entry != 999 (do-while loop); multi-line browser output
B. Derive letter grade from the following values
    88-100      A
    80-87       B
    68-79       C
    60-67       D
    < 60        F
C. Data validation
    1. valid num from 0 through 100
    2. invalid input will display starting prompt + text input field
*/

"use strict";

let numGrade = 0;
let letterGrade = "";

function readNumGrade() {
    numGrade = parseInt(prompt("Enter number grade from 0 through 100\nOr enter 999 to end entries"));
}

// 3-2C #2. invalid input will display starting prompt + text input field. Nguyen & Tepper, 17OCT2022.
function invalidInput() {
    return numGrade = 0;
}

function toLetterGrade() {
    if (numGrade < 60) {
        letterGrade = "F"; 
    }

    else if (numGrade >= 60 && numGrade <= 67) {
        letterGrade = "D";
    }

    else if (numGrade >= 68 && numGrade <= 79) {
        letterGrade = "C";
    }

    else if (numGrade >= 80 && numGrade <= 87) {
        letterGrade = "B";
    }

    else if (numGrade >= 88 && numGrade <= 100) {
        letterGrade = "A";
    }
}

// 3-2A. displays multi entry numGrade to letterGrade conversions. Nguyen & Tepper, 17OCT2022.
function gradeDisplay() {
    document.write(`<p>Grade ${numGrade} = ${letterGrade}</p><p></p>`);
}

// 3-2A do-while (numGrade != 999) loop. Nguyen & Tepper, 17OCT2022.
do {
    readNumGrade();

    if (numGrade >= 0 && numGrade <= 100) {
        toLetterGrade();
        gradeDisplay(); // 3-2A
    }

    else if (numGrade < 0) {
        invalidInput();
    }

    else if (numGrade <= 998 && numGrade >= 101) {
        invalidInput();
    }
}
while (numGrade != 999);