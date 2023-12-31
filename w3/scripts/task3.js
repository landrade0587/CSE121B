/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
    return number1 + number2;
  }
  // Step 2: In the function, return the sum of the parameters number1 and number2
  
  // Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values 
  // of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
  function addNumbers() {
    let addend1 = parseFloat(document.querySelector("#addend1").value);
    let addend2 = parseFloat(document.querySelector("#addend2").value);
    let sum = add(addend1, addend2);
    document.querySelector("#sum").value = sum;
  }

  // Step 4: Assign the return value to an HTML form element with an ID of sum
  
  // Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
  document.querySelector("#addNumbers").addEventListener("click", addNumbers);
  
  // Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers 
  // and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
  function subtract(number1, number2) {
    return number1 - number2;
  }
  
  function subtractNumbers() {
    let minuend = parseFloat(document.querySelector("#minuend").value);
    let subtrahend = parseFloat(document.querySelector("#subtrahend").value);
    document.querySelector("#difference").value = subtract(minuend, subtrahend);
  }
  
  document
    .querySelector("#subtractNumbers")
    .addEventListener("click", subtractNumbers);
  
  // Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers 
  //  and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
  let multiply = (factor1, factor2) => factor1 * factor2;
  
  let multiplyNumbers = () => {
    let factor1 = parseFloat(document.querySelector("#factor1").value);
    let factor2 = parseFloat(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
  };
  
  document
    .querySelector("#multiplyNumbers")
    .addEventListener("click", multiplyNumbers);
  
  // Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions
  //  named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
  let divide = (dividend, divisor) => dividend / divisor;
  
  function divideNumbers() {
    let dividend = parseFloat(document.querySelector("#dividend").value);
    let divisor = parseFloat(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
  }
  
  document
    .querySelector("#divideNumbers")
    .addEventListener("click", divideNumbers);

  // Step 9: Test all of the mathematical functionality of the task3.html page.
  




  /* BUILT-IN METHODS */
  
  // Step 1: Declare and instantiate a variable of type Date to hold the current date
  const currentDate = new Date();

  // Step 2: Declare a variable to hold the current year
  let currentYear;

  // Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function
  //  and assign it to the variable declared in Step 2
  currentYear = currentDate.getFullYear(); 
   
  // Step 4: Assign the current year variable to an HTML form element with an ID of year
  document.querySelector('#year').textContent = currentYear;

  
  

  /* ARRAY METHODS */
  
  // Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
  const numbers = [];
  for (let i = 1; i <= 25; i++) {
    numbers.push(i);
  }

  // Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
  document.querySelector("#array").innerHTML = numbers;

  // Step 3: Use the filter array method to find all of the odd numbers of the array variable 
  // and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
    const odds = numbers.filter((number) => number % 2);
  document.querySelector("#odds").innerHTML = odds;

  // Step 4: Use the filter array method to find all of the even numbers of the array variable 
  // and assign the result to the HTML element with an ID of "evens"
  const evens = numbers.filter((number) => number % 2 == false);
  document.querySelector("#evens").innerHTML = evens;

  // Step 5: Use the reduce array method to sum the array variable elements 
  //  and assign the result to the HTML element with an ID of "sumOfArray"
  const sum = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  document.querySelector("#sumOfArray").innerHTML = sum;

  // Step 6: Use the map array method to multiple each element in the array variable by 2 
  //  and assign the result to the HTML element with an ID of "multiplied"
  const multiplyAll = numbers.map((x) => x * 2);
  document.querySelector("#multiplied").innerHTML = multiplyAll;
  
  // Step 7: Use the map and reduce array methods to sum the array elements
  //   after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
  const sumMultiply = multiplyAll.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  document.querySelector("#sumOfMultiplied").innerHTML = sumMultiply;