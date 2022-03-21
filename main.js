let amountDue = document.getElementById('amount-due');
let amountGiven = document.getElementById('amount-received');
let twentyDollars = document.getElementById('twenty-dollars-output');
let tenDollars = document.getElementById('ten-dollars-output');
let fiveDollars = document.getElementById('five-dollars-output');
let twoDollars = document.getElementById('two-dollars-output');
let dollars = document.getElementById('dollars-output');
let quarters = document.getElementById('quarters-output');
let dimes = document.getElementById('dimes-output');
let nickels = document.getElementById('nickels-output');
let pennies = document.getElementById('pennies-output');
let output  = document.getElementById('output');

const handleChangeButton = e => {
    let diff = amountGiven.value - amountDue.value;
    let change = amountGiven.value - amountDue.value;
    if (diff > 0) {
        twentyDollars.innerHTML = Math.floor(change / 20);
        change = (change % 20).toFixed(2);
    }
    if (diff > 0) {
        tenDollars.innerHTML = Math.floor(change / 10);
        change = (change % 10).toFixed(2);
    }
    if (diff > 0) {
        fiveDollars.innerHTML = Math.floor(change / 5);
        change = (change % 5).toFixed(2);
    }
    if (diff > 0) {
        twoDollars.innerHTML = Math.floor(change / 2);
        change = (change % 2).toFixed(2);
    }
    if (diff > 0) {
        dollars.innerHTML = Math.floor(change / 1);
        change = (change % 1).toFixed(2);
    }
    if (diff > 0) {
        quarters.innerHTML = Math.floor(change / 0.25);
        change = (change % 0.25).toFixed(2);
    }
    if (diff > 0) {
        dimes.innerHTML = Math.floor(change / 0.10);
        change = (change % 0.10).toFixed(2);
    }
    if (diff > 0) {
        nickels.innerHTML = Math.floor(change / 0.05);
        change = (change % 0.05).toFixed(2);
    }
    if (diff > 0) {
        pennies.innerHTML = Math.floor(change / 0.01);
        change = (change % 0.01).toFixed(2);
    }
    output.innerHTML = 'Your change due is ' + diff;
}

document.getElementById('calculate-change').addEventListener('click', () => handleChangeButton());
