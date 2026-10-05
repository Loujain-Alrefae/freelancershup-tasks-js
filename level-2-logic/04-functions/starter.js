// =============================================================
// Level 2 · Task 1 — Functions
// =============================================================

// Example, already done for you:
function double(n) {
  return n * 2;
}
console.log("double(4) =", double(4));


// TODO 1: function square(n) → returns n times n
//         square(5) should give back 25
function square(n){
  return n * n;
}
console.log("square 9 :", square(9) );

// TODO 2: function celsiusToFahrenheit(c) → returns c * 9 / 5 + 32
//         celsiusToFahrenheit(100) should give back 212
function celsiusToFahrenheit(c){
  return c * 9 / 5 + 32;
}
console.log("celsiusToFahrenheit 100:", celsiusToFahrenheit(100));

// TODO 3: function greet(name = "friend") → returns `Hello, ${name}!`
//         greet("Sara") → "Hello, Sara!"     greet() → "Hello, friend!"
//         The = "friend" part is a DEFAULT value, used when nothing is passed in.
function greet(name){
  if(!name) return "Hello, friend!";
  return `Hello, ${name}!`
}
console.log(greet());

// TODO 4: An ARROW FUNCTION is a shorter way to write a function:
//         const add = (a, b) => a + b;
//         With no { } the result is returned automatically.
const add = (a , b)=> a + b;
console.log(add(5,6));

// TODO 5: function priceWithTax(price, taxRate = 0.15)
//         → returns the price plus tax
//         priceWithTax(100) → 115     priceWithTax(100, 0) → 100
function priceWithTax(price , taxRate = 0.15){
  return price + (price * taxRate)
}
console.log(priceWithTax(100 , 0.20))//120

// Try your functions here:
//console.log(square(5), celsiusToFahrenheit(100), greet(), add(2, 3));
console.log(`square(5): ${square(5)}, celsiusToFahrenheit(100): ${celsiusToFahrenheit(100)}, greet():${greet()}, add(2, 3): ${add(2, 3)} `)

// TODO 6: Read this, run it, and answer in a comment:
//         why does `result` show undefined?
function logDouble(n) {
  console.log(n * 2);
}
const result = logDouble(5);
console.log("result is", result);
// Your answer:
// Because the function doesn't have a 'return' statement,
// it logs the double to the console but returns nothing (undefined) to the 'result' variable.

const isEven = (n) => n%2 ===0;
console.log("isEven", isEven(4))
