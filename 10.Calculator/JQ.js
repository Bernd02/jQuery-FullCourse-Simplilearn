// 03:43:02 > Calculator

$(() => {
    let result = 0;
    let previousEntry = 0;
    let operation = null;
    let currentEntry = "0";

    updateScreen(result);

    // --------------------------------------------------
    // # on click event
    $(".button").on("click", (evt) => {
        let buttonPressed = "";
        buttonPressed = $(evt.target).html();
        console.log(buttonPressed);

        // --------------------------------------------------
        // # Current Entry
        if (buttonPressed === "C") {
            result = 0;
            currentEntry = "0";
        }
        else if (buttonPressed === "CE") {
            currentEntry = "0";
        }
        // back = backspace
        else if (buttonPressed === "back") {
            currentEntry = currentEntry.substring(0, currentEntry.length - 1);
        }
        else if (buttonPressed === "+/-") {
            currentEntry *= -1;
        }
        else if (buttonPressed === ".") {
            currentEntry += "."
        }
        else if (isNumber(buttonPressed)) {
            if (currentEntry === "0") {
                currentEntry = buttonPressed;
            }
            else {
                currentEntry += buttonPressed;
            }
        }
        else if (isOperator(buttonPressed)) {
            previousEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = "";
        }
        else if (buttonPressed === "%") {
            currentEntry /= 100;
        }
        else if (buttonPressed === "sqrt") {
            currentEntry = Math.sqrt(currentEntry);
        }
        else if (buttonPressed === "1/x") {
            currentEntry = 1 / currentEntry;
        }
        else if (buttonPressed === "PI") {
            currentEntry = Math.PI;
        }
        else if (buttonPressed === "=") {
            currentEntry = operate(previousEntry, currentEntry, operation);
            operation = null;
        }

        // --------------------------------------------------
        updateScreen(currentEntry);
    });
});

// --------------------------------------------------
// Functies
function isNumber(value) {
    return !isNaN(value);
}

function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
}

function updateScreen(displayValue) {
    displayValue = String(displayValue);
    $(".screen").html(displayValue.substring(0, 10));
}

function operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);

    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}
