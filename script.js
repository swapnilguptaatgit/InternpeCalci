// script2.js
let history=[];
function insertCharacter(char) {
    const display = document.getElementById('inputBox');
    display.value = display.value === '0' ? char : display.value + char;
  }
  
  function clearDisplay() {
    document.getElementById('inputBox').value = '0';
  }
  
  function deleteLastChar() {
    const display = document.getElementById('inputBox');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
      display.value = '0';
    }
  }
  function convertToDollars() {
    const display = document.getElementById('inputBox');
    const rupeesValue = parseFloat(display.value);
    
    if (!isNaN(rupeesValue)) {
      const dollarValue = rupeesValue / 82; // Assuming the exchange rate is 1 USD = 74.5 INR
      display.value = rupeesValue + '₹=' + dollarValue.toFixed(2) + '$'; // Round to 2 decimal places
    } else {
      display.value = 'Error';
    }
}
function convertToEuros() {
  const display = document.getElementById('inputBox');
  const rupeesValue = parseFloat(display.value);
  
  if (!isNaN(rupeesValue)) {
    const euroValue = rupeesValue / 91.25 ; // Assuming the exchange rate is 1 EUR = 94.2 INR
    display.value = rupeesValue + '₹=' + euroValue.toFixed(2) + '€'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
function convertToPounds() {
  const display = document.getElementById('inputBox');
  const rupeesValue = parseFloat(display.value);
  
  if (!isNaN(rupeesValue)) {
    const poundValue = rupeesValue / 105.41; // Assuming the exchange rate is 1 GBP = 104.5 INR
    display.value = rupeesValue + '₹=' + poundValue.toFixed(2) + '£'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}

function convertToYen() {
  const display = document.getElementById('inputBox');
  const rupeesValue = parseFloat(display.value);
  
  if (!isNaN(rupeesValue)) {
    const yenValue = rupeesValue * 1.72 // Assuming the exchange rate is 1 JPY = 1.52 INR
    display.value = rupeesValue + '₹=' + yenValue.toFixed(2) + '¥'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
function convertToMeters() {
  const display = document.getElementById('inputBox'); // Assuming you have an input box with the id 'inputBox' to get the cm value
  const cmValue = parseFloat(display.value);

  if (!isNaN(cmValue)) {
    const meterValue = cmValue / 100; // 1 meter = 100 centimeters
    display.value = cmValue + 'cm=' + meterValue.toFixed(2) + 'm'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
function convertToFeet() {
  const display = document.getElementById('inputBox'); // Assuming you have an input box with the id 'inputBox' to get the meter value
  const meterValue = parseFloat(display.value);

  if (!isNaN(meterValue)) {
    const feetValue = meterValue * 3.28084; // 1 meter = 3.28084 feet
    display.value = meterValue + 'm=' + feetValue.toFixed(2) + 'ft'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
function convertToFtMeters() {
  const display = document.getElementById('inputBox'); // Assuming you have an input box with the id 'inputBox' to get the feet value
  const feetValue = parseFloat(display.value);

  if (!isNaN(feetValue)) {
    const meterValue = feetValue / 3.28084; // 1 meter = 3.28084 feet
    display.value = feetValue + 'ft = ' + meterValue.toFixed(2) + 'm'; // Round to 2 decimal places
  } else {
    display.value = 'Error';
  }
}
  
  function calculate() {
    const display = document.getElementById('inputBox');
    let expression = display.value;
    try {
      const result = eval(expression);
      display.value = result;
      history.push(expression + ' = ' + result + " , "); // Add the calculation and result to the history array
    } catch (error) {
      display.value = 'Error';
    }
  }
  function showHistory() {
    const display = document.getElementById('inputBox');
    display.value = history.join('\n');
  }