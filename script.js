// Get references to the screen and buttons
const input = document.getElementById('input');
const output = document.getElementById('output');
const buttons = document.getElementById('buttons');

// Add event listener to the buttons
buttons.addEventListener('click', (event) => {
    if (event.target.classList.contains('number')) {
        handleNumberClick(event.target.textContent);
    } else if (event.target.classList.contains('operator')) {
        handleOperatorClick(event.target.textContent);
    } else if (event.target.id === 'equals') {
        calculateResult();
    } else if (event.target.id === 'clear') {
        clearInput();
    }
});

// Handle digit (number) button clicks
function handleNumberClick(number) {
    input.textContent += number;
}

// Handle operator button clicks
function handleOperatorClick(operator) {
    input.textContent += ` ${operator} `;
}

// Perform the calculation and show the result
function calculateResult() {
    try {
        const result = eval(input.textContent);
        output.textContent = result;
    } catch (error) {
        output.textContent = 'Error';
    }
}

// Clear the input and output
function clearInput() {
    input.textContent = '';
    output.textContent = '';
}
