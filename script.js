const operations = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelectorAll('.clear-btn');
const decimal = document.getElementById('decimal');
const display = document.getElementById('display');

var CurrentNumberMemory = 0;
var NewNumber = true;
var CurrentOperation = '';

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
    if (CurrentOperation === '') {
        CurrentOperation = op;
    } else if (CurrentOperation === '+') {
        CurrentNumberMemory += parseFloat(display.value);
        display.value = CurrentNumberMemory;
        CurrentOperation = '';
    } else if (CurrentOperation === '-') {
        CurrentNumberMemory -= display.value;
        display.value = CurrentNumberMemory;
        CurrentOperation = '';
    } else if (CurrentOperation === '/') {
        CurrentNumberMemory /= display.value;
        display.value = CurrentNumberMemory;
        CurrentOperation = '';
    } else if (CurrentOperation === '*') {
        CurrentNumberMemory *= display.value;
        display.value = CurrentNumberMemory;
        CurrentOperation = '';
    } else {
        CurrentOperation = '';
    }
    console.log('Нажата операция ' + op);
}

function numberClick(number) {
    if (NewNumber === true) {
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
    if (params == 'c') {
        CurrentOperation = '';
        CurrentNumberMemory = 0;
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