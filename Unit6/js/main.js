
function tellStory(){
//nounArray = queryselector('#noun') //lowercase String split()
/* let nounArray = ['wizard', 'broom', 'elf', 'cauldron', 'wand', 'castle', 'spell'] */
/* let adjArray = ['scary', 'sparkly', 'black']
let verbArray = ['laugh', 'fly'] */
let nounArray = document.querySelector('#noun')
let adjArray = document.querySelector('#adjective')
let verbArray = document.querySelector('#verb')

const myStory = `Once upon a time there was a ${nounArray[0]}s named Looloo, Smash, and Peter. ${adjArray[0]} ${verbArray[0]}`

//get a reference to the onclick id
document.querySelector('#story').onclick = tellStory
}