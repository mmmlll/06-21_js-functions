// Write a function that takes an array of numbers,
// and returns the sum of each number multiplied by its index.
// count += (number * index)


function sillySum (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += i * arr[i];
  }
  return sum;
}

console.log(sillySum([3, 4, 5]));   // 14
