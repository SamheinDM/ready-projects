const operations = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelectorAll('.clear-btn');
const decimal = document.getElementById('decimal');
const display = document.getElementById('display');

var CurrentNumberMemory = 0;
var NewNumber = true;
var CurrentOperation = '';
var IsItCleared = false;

for (let i = 0; i < operations.length; i++) {
    var operation = operations[i];
    operation.addEventListener('click', function (e) {
        operationClick(e.target.textContent);
    })
}

for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    number.addEventListener('click', function (e) {
        numberClick(e.target.textContent);
    })
}

for (let i = 0; i < clear.length; i++) {
    const cl = clear[i];
    cl.addEventListener('click', function (e) {
        clearClick(e.target.textContent);
    })
}

decimal.addEventListener('click', function (e) {
    decimalClick(e.target.textContent);
})

function operationClick(op) {
    NewNumber = true;
    if (op === '\u221A') {
        if (parseFloat(display.value) < 0) {
            display.value = 'Ошибка';
        } else {
            CurrentNumberMemory = Math.sqrt(display.value);
            display.value = parseFloat(CurrentNumberMemory.toFixed(15));
            CurrentOperation = '';
        }
    } else if (CurrentOperation === '') {
        CurrentOperation = op;
    } else if (CurrentOperation === '+') {
        CurrentNumberMemory += parseFloat(display.value);
        display.value = parseFloat(CurrentNumberMemory.toFixed(15));
        CurrentOperation = '';
    } else if (CurrentOperation === '-') {
        CurrentNumberMemory -= parseFloat(display.value);
        display.value = parseFloat(CurrentNumberMemory.toFixed(15));
        CurrentOperation = '';
    } else if (CurrentOperation === '/') {
        CurrentNumberMemory /= parseFloat(display.value);
        display.value = parseFloat(CurrentNumberMemory.toFixed(15));
        CurrentOperation = '';
    } else if (CurrentOperation === '*') {
        CurrentNumberMemory *= parseFloat(display.value);
        display.value = parseFloat(CurrentNumberMemory.toFixed(15));
        CurrentOperation = '';
    } else if (CurrentOperation === 'nx') {
        CurrentNumberMemory = Math.pow(CurrentNumberMemory, display.value);
        display.value = parseFloat(CurrentNumberMemory.toFixed(15));
        CurrentOperation = '';
    } else {
        CurrentOperation = '';
    }
    console.log('Нажата операция ' + op);
}

function numberClick(number) {
    if (NewNumber === true && IsItCleared == true) {
        display.value = number;
        IsItCleared = false;
    } else if (NewNumber === true) {
        CurrentNumberMemory = parseFloat(display.value);
        display.value = number;
    } else {
        if (display.value == '0') {
            display.value = number;
        } else {
            display.value += number;
        }
    }
    NewNumber = false;
    console.log('Нажат номер ' + number);
}

function clearClick(params) {
    NewNumber = true;
    display.value = 0;
    if (params === 'c') {
        CurrentOperation = '';
        CurrentNumberMemory = 0;
    } else {
        IsItCleared = true;
    }
    console.log('Нажат ' + params);
}

function decimalClick(dec) {
    if (NewNumber == true) {
        CurrentNumberMemory = parseFloat(display.value);
        display.value = '0.';
        NewNumber = false;
    }
    if (display.value.indexOf(dec) === -1) {
        display.value += dec;
    }
    console.log('Нажата ' + dec);
}