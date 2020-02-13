
let resultStory = document.querySelector('#story')

function tellStory(){

let nounArray = document.querySelector('#noun').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
console.log(nounArray)
let adjArray = document.querySelector('#adjective').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
console.log(adjArray)
let verbArray = document.querySelector('#verb').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
/* Wizard x
Broom x
Elf x
Cauldron x
Wand x
Castle x
Spell */

/* Scary x
Sparkly x
Small x */

/* Laugh x
Fly  x*/

const myStory = `Once upon a time there were some <span>${nounArray[0]}s </span> named Looloo, Smash, and Peter. Peter had a 
 <span>${adjArray[0]}</span> <span>${verbArray[0]}</span>, and sometimes he would sneak around the <span>${nounArray[5]}</span> and creep behind Looloo, 
 raise his <span>${nounArray[4]}</span>, and scare her so bad she'd start <span> ${verbArray[2]}ing </span>. 
 She'd get so scared that she'd jump on her <span> ${adjArray[1]}</span> <span> ${nounArray[1]} and <span>${verbArray[1]}</span> around the halls. 
 She usually ended up at the gamekeeper's hut on the grounds. The gamekeeper was a <span> ${adjArray[2]} <span>${nounArray[2]}</span>. He would help her with her homework 
 because her <span> ${nounArray[3]}s </span> kept exploding in class. She'd shine it until it was <span> ${adjArray[1]}</span> but then it would explode
 the next potions class.`

//get a reference to the onclick id
resultStory.innerHTML = myStory
console.log(myStory)


}
document.querySelector('#story').onclick = tellStory
