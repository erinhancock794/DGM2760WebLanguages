
// picking a random number between 0 and 21

const correctNumber = Math.floor(Math.random() * (21 - 1) + 1)
console.log(`The correct number is ${correctNumber}`)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0



function evalGuess() {
totalGuesses += 1 //totalGuesses = totalGuesses +1
gamerGuess = document.querySelector('#guess').value

const feedback = document.querySelector('#feedback')
if (gamerGuess == correctNumber) {
    console.log('gamerGuess is equal to correctNumber')
} else {
    console.log('gamerGuess does NOT equal correctNumber!!')
}
//console.log(totalGuesses, gamerGuess)
}