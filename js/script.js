// console.log('linked to my html!');
//
// function pausecomp (millis) {
//   var date = new Date();
//   var curDate = null;
//
//   while (curDate - date < millis) {
//     curDate = new Date();
//   }
//   alert('done pausing');
// }
//
// pausecomp(3000);

// var answer = prompt("Please type a number")
// alert("the answer is" + answer)

// function that checks guessed number with the random number
function higherOrLower(guessedNumber, randomNumber) {
  // alert("random number is " + randomNumber)
  if (guessedNumber > randomNumber) {
    updateH1("lower, random number is " + randomNumber)
    repeatGuess(randomNumber)
  } else if (guessedNumber < randomNumber) {
    updateH1("higher, random number is " + randomNumber)
    repeatGuess(randomNumber)
  } else {
    updateH1("correct, random number is " + randomNumber)
  }
}
// This function [repeats higherorlower until correct is reached]
function repeatGuess(answer) {
  var newGuess = prompt("Give me another number")
  higherOrLower(newGuess, answer)
}

// this function updates h1
function updateH1(newH1) {
  var h1 = document.querySelector("h1")
  // var h1 = document.getElementsByTagName("h1") // this is the alternative to querySelector. looks more familiar to me
  h1.textContent = newH1
  // you can figure out the methods available to any document element by typing this into the Inspect terminal:
//   var h1 = document.querySelector("h1")
// h1. [once you enter this, a box will pop up showing you all the methods available to h1]
}

// function that generates randomNumber
// randomNumber between min and max (exclusive)
function randomNumber(min,max) {
  return Math.floor(Math.random() * (max-min)) + min
}

var guessedNumber = prompt("Give me a number")

higherOrLower(guessedNumber, randomNumber(0,10))
// update h1 to say higher or lower
// or if number guess is correct, we change the body color
