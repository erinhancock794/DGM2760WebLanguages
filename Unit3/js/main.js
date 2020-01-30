
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
        feedback.innerText = 'You are correct!! Congratulations!'
        giveAward()
        console.log('gamerGuess is equal to correctNumber')
    } else if (gamerGuess > correctNumber && gamerGuess < 21) {
        feedback.innerText = 'Too high! Try again.'
    } else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low! Try again.'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 20!'
        totalGuesses -= 1
    }
    document.querySelector('#attempts').innerText = totalGuesses
    //console.log('gamerGuess does NOT equal correctNumber!!')
}
//console.log(totalGuesses, gamerGuess)
function giveAward() {
    let imagePath = '#'
    switch (totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'images/blueribbon.png'
            feedback.innerText = 'You got it in 3 tries or less!'
            
            break;
        case 4:
            imagePath = 'images/redribbon.png'
            console.log('2nd Place. Red Ribbon')
            break;
        case 5:
            imagePath = 'images/yellowribbon.png'
            console.log('3rd place. Yellow Ribbon')
            break;
    }


    console.log('Congrats')

    const awardImg = document.createElement('img')
    awardImg.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')
    ribbon.appendChild(awardImg)
}