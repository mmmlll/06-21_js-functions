// Write a function that takes a string that finds out
// how many times a character occurs. For example,
// the string "apple" would print the following:

// a - 1
// p - 2
// l - 1
// e - 1
// Hint: Loop through each letter, and increment the value
// to a key in an object. The key should be that object.
//
// BONUS: Make sure that lower case letters and upper
// case letters count for the same character. Also, ignore
// spaces and punctuation.

var charsObj = {};

function countChars (str) {
  // console.log(charsObj.c)
  var strAsArr = str.split('');
  strAsArr.forEach(function (c) {
    (charsObj[c]) ? charsObj[c] += 1 : charsObj[c] = 1; // charsObj.c does not work because c is not defined as a variable. Have to use .[c] to assign the property c to the charsObj
  });
  return charsObj;
}

console.log(countChars('borobudur'));
