// Write a function isCharacterAVowel that takes a character (i.e. a string of
// length 1) and returns true if it is a vowel and false, otherwise.

var vowels = ['a', 'e', 'i', 'o', 'u'];

function isCharacterAVowel(x) {
  // console.log(vowels)
  vowels.forEach(function(v) {
    if (x === v) {
      // console.log( x === v )
      return true;
    }
    // console.log( x === v )
    return false;
  });
}

console.log(isCharacterAVowel('z'));

// THIS FAILS! RETURNS UNDEFINED EACH TIME. I THINK IT HAS SOMETHING TO DO
// WITH forEach and it's "callback" / "doesnt support breaks (returns)"

// Other people's answers:

// function isCharAVowel(char){
//   var vowels = "aeiou";
//   var isAVowel = false;
//   for(var i = 0; i < vowels.length; i++){
//     if(char === vowels[i]){
//       isAVowel = true;
//     }
//   }
//   return isAVowel;
// }

// function isCharacterAVowel(n){
//   var vowels=["a","e","i","o","u"]
//   return vowels.includes(n) ? true: false
//
// }
//
// console.log(isCharacterAVowel("o"))
