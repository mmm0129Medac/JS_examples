document.addEventListener('DOMContentLoaded', function () {
    // Function to multiply two numbers and display the result
    function multiplyBy() {
        // Get the input values
        const num1 = parseFloat(document.getElementById('firstNumber').value);
        const num2 = parseFloat(document.getElementById('secondNumber').value);

        // Validate input values
        if (isNaN(num1) || isNaN(num2)) {
            alert('Please enter valid numbers');
            return;
        }

        // Calculate the result
        const result = num1 * num2;

        // Display the result
        document.getElementById('result').innerText = result;

        // Display the length of the result
        document.getElementById('resultLength').innerText = result.toString().length;

        // Change the background color of the inputs
        document.getElementById('firstNumber').style.backgroundColor = 'red';
        document.getElementById('secondNumber').style.backgroundColor = 'blue';

        // Change the color of all input elements to yellow
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.color = 'yellow';
        }

        // Change the font size of the first value in the form
        const form = document.getElementsByTagName('form')[0];
        form.style.fontSize = '20px';
    }

    // Function to divide two numbers and display the result
    function divideBy() {
        // Get the input values
        const num1 = parseFloat(document.getElementById('firstNumber').value);
        const num2 = parseFloat(document.getElementById('secondNumber').value);

        // Validate input values
        if (isNaN(num1) || isNaN(num2)) {
            alert('Please enter valid numbers');
            return;
        }

        // Check for division by zero
        if (num2 === 0) {
            alert("Cannot divide by zero");
            return;
        }

        // Calculate the result
        const result = num1 / num2;

        // Display the result
        document.getElementById('result').innerText = result;

        // Display the length of the result
        document.getElementById('resultLength').innerText = result.toString().length;
    }

    // Add event listeners to the buttons
    document.getElementById('multiplyButton').addEventListener('click', multiplyBy);
    document.getElementById('divideButton').addEventListener('click', divideBy);
});
