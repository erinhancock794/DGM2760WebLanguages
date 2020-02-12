
let resultStory = document.querySelector('#story')

function tellStory(){

let nounArray = document.querySelector('#noun').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
console.log(nounArray)
let adjArray = document.querySelector('#adjective').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
console.log(adjArray)
let verbArray = document.querySelector('#verb').value.toLowerCase().split(/\s*[,\n." "]+\s*/)


const myStory = `Once upon a time there were some <span>${nounArray[0]}s </span> named Looloo, Smash, and Peter. Peter has a 
 <span>${adjArray[0]}</span> <span>${verbArray[0]}</span>, and sometimes he would sneak around the <span>${nounArray[5]}</span> and creep behind Looloo, raise his <span>${nounArray[4]}</span>, and scare her. 
 She'd get so scared that she'd jump on her <span> ${adjArray[1]}</span> <span> ${nounArray[1]} and <span>${verbArray[1]}</span> around the halls.`

//get a reference to the onclick id
resultStory.innerHTML = myStory
console.log(myStory)


}
document.querySelector('#story').onclick = tellStory
