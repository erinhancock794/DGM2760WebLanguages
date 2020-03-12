//creating an array of trees
const trees = ['aspen', 'mesquite', 'oak', 'Douglas Fur', 'cedar']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')



//display list of trees inside displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span> ${trees.length} elements long </span>`

}
listTrees()

//add pine tree to end of list
document.querySelector('#add_pine').onclick = () => {
    trees.push('pine')
    listTrees()
    errorElement.textContent = ''
}

//add apple tree to start of list
document.querySelector('#add_apple').onclick = () => {
    trees.unshift('apple')
    listTrees()
    errorElement.textContent = ''
}
//remove first tree in list
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = "Can't remove a tree because there aren't any listed."
    }
}
//remove second tree in list
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
        errorElement.textContent = ''
    } else {
        errorElement.textContent = "There aren't enough trees to remove the second one."
    }
}
//remove last tree in list
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
        errorElement.textContent = ''
    } else {
        errorElement.textContent = "Can't remove a tree because there aren't any listed."
    }
}


//sort trees A-Z
document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 0) {
        trees.sort((a, b) => {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        })
        listTrees()

        errorElement.textContent = ''
    }
    else {

        errorElement.textContent = "Can't sort without any trees in the list."
    }
}
//make all trees lowercase

document.querySelector('#lowercaseTrees').onclick = () => {
    if (trees.length > 0) {
        let nameList = []
        nameList = trees.map(trees => trees.toLowerCase())
        trees.splice(0, nameList.length, ...nameList)
        listTrees() 
    } else {
    errorElement.textContent = "Can't sort without any trees in the list."
}
}
//console.log(nameList)






//name of the third tree
document.querySelector('#name_tree3').onclick = () => {
    if (trees.length > 2) {
        error.textContent = trees[2]
    } else {
        error.textContent = 'There are not enough trees to list the third tree.'
    }
}

//name of the 4th tree and error message
document.querySelector('#name_tree4').onclick = () => {
    if (trees.length > 3) {
        error.textContent = trees[3]
    } else {
        error.textContent = 'There are not enough trees to list the fourth tree.'
    }
}
