// Define a function maxOfThree that takes three numbers as arguments and
// returns the largest of them.
// Use the if-then-else construct available in Javascript.

function maxOfThree(a, b, c) {
  var largest = a;
  if (a < b) {
    largest = b;
  }
  if (largest < c) {
    largest = c;
  }
  return largest;
}

console.log(maxOfThree(4, 23, 235));  // 235
console.log(maxOfThree(345, 45, 2));  // 345
console.log(maxOfThree(264, 1, 45));  // 264
console.log(maxOfThree(48, 321, 5));  // 321
