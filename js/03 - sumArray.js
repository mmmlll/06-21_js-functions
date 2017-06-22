// Define a function sumArray and a function multiplyArray
// that sums and multiplies (respectively) all the numbers
// in an array of numbers. For example, sumArray([1,2,3,4])
// should return 10, and multiplyArray([1,2,3,4]) should
// return 24.

var sum = 0;
function sumArr(array) {
  array.forEach(function(n) {
    sum += n;
  });
  return sum;
}

var multiplied = 1;
function multiplyArray(array) {
  array.forEach(function(n) {
    multiplied = multiplied * n;
  });
  return multiplied;
}

var arr = [1, 2, 3, 4];
console.log(sumArr(arr));  // 10
console.log(multiplyArray(arr));  // 24
