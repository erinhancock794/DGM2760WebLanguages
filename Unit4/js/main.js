function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min // +1 makes function inclusive
}
console.log(getRandomNum(1, 4))



function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;

        default:
            name = 'not a month'
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'win the lottery!'
            break;
        case 2:
            message = 'not even die!'
            break;
        case 3:
            message = 'travel the world.'
            break;
        case 4:
            message = 'definitely make it in Hollywood.'
            break;
        case 5:
            message = 'not break any bones'
            break;
        default:
            message = 'error occured'
            break;
    }
    return message
}
let month = getRandomNum(1, 12);
let fate = getRandomNum(1, 5);
let date = getRandomNum(1, 30);

const monthName = getMonthName(month)
const theFateRevealed = getFortune(fate)

console.log(date)
console.log(monthName)
console.log(theFateRevealed)

const theFortune = `On ${monthName} ${date}, you will ${theFateRevealed}`

document.querySelector('#fortune').innerText = theFortune