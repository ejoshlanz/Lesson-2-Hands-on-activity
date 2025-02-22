// The given sample JavaScript code
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15

// My solution in JavaScript
function calculateSum() {
    // Prompt the user to enter two numbers
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let sum = addNumbers(num1, num2);

    alert("The sum is: " + sum);
}
