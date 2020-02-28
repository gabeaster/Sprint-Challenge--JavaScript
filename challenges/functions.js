// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return cb(a,b)
}


/* Step 2: Create several functions to callback with consume();
[console log correct: 
3
functions.js:29 6
functions.js:34 Hello Gabby Easter, nice to meet you!
]
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b){
  return a + b;
}
console.log(consume(1, 2, add));

function multiply(a,b){
  return a * b
}
console.log(consume(2,3, multiply));

function greeting(first, last){
  return `Hello ${first} ${last}, nice to meet you!`
}
console.log(greeting('Gabby', 'Easter'));


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
CORRECT

// ==== Closures ==== [done]

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
"Closures take in the lexical environment that the function is declared in. This means that nestedFunction references the internal variables which maintains reference to myFunction, which maintains reference to the external variable." 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
