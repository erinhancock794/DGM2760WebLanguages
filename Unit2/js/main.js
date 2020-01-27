document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "A French Inspector"


function reDisplay() {
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall!`
    let offset = ` Window offset is ${window.screenX} from the left edge and ${window.screenY} from the top of the display.`

    let objectURL = `The URL is ${window.location}`
    let myWindow = document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${objectURL}`
}
reDisplay()

let documentTitle = `The title of this document is ${document.title}`
let lastVisit = `This page was last visited at ${document.lastModified}`
let myDocument = document.querySelector('#myDocument').innerText = documentTitle + '\n' + lastVisit 