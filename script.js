
document.addEventListener('DOMContentLoaded', function() {
    const displayScreen = document.getElementById('displayScreen');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clear');

    let currentInput = '';
    let currentOperator = '';
    let previousInput = '';

    // Update the display screen
    function updateDisplay() {
        displayScreen.value = currentInput;
    }

    // Handle number button clicks
    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentInput += button.value;
            updateDisplay();
        });
    });

    // Handle operator button clicks
    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentOperator = button.value;
            previousInput = currentInput;
            currentInput = '';
            updateDisplay();
        });
    });

    // Handle equal button click
    calculateButton.addEventListener('click', function() {
        if (currentInput !== '' && previousInput !== '' && currentOperator !== '') {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);
            let result = 0;

            if (currentOperator === '+') {
                result = num1 + num2;
            } else if (currentOperator === '-') {
                result = num1 - num2;
            } else if (currentOperator === '*') {
                result = num1 * num2;
            } else if (currentOperator === '/') {
                result = num1 / num2;
            }

            currentInput = result.toString();
            previousInput = '';
            currentOperator = '';
            updateDisplay();
        }
    });

    // Handle clear button click
    clearButton.addEventListener('click', function() {
        currentInput = '';
        previousInput = '';
        currentOperator = '';
        updateDisplay();
    });
});
