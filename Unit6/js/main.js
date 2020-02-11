
let resultStory = document.querySelector('#story')

function tellStory(){

let nounArray = document.querySelector('#noun').value.toLowerCase().split((/\s*[,\n." "]+\s*/))
console.log(nounArray)
let adjArray = document.querySelector('#adjective').textContent

let verbArray = document.querySelector('#verb').textContent


const myStory = `Once upon a time there were some <span>${nounArray[0]}s </span> named Looloo, Smash, and Peter. ${adjArray[0]} ${verbArray[0]}`
console.log(myStory)
//get a reference to the onclick id
const postStory = document.querySelector('#story')
postStory.outputHTML = myStory

}
document.querySelector('#story').onclick = tellStory
