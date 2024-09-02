function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    let result;
    const randomValue = Math.random();

    if (randomValue < 0.9) { // 90% chance to do wrong operation
        switch (operation) {
            case 'add':
                result = num1 - num2; // should add but does subtraction
                break;
            case 'subtract':
                result = num1 / num2; // should subtract but does division
                break;
            case 'multiply':
                result = num1 + num2; // should multiply but does addition
                break;
            case 'divide':
                result = num1 * num2; // should divide but does multiplication
                break;
            default:
                result = 'Invalid operation';
        }
    } else { // 10% chance to perform the correct operation
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
            default:
                result = 'Invalid operation';
        }
    }

    document.getElementById('result').innerText = result;
}