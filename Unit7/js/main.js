const pizza = {
    crust: 'thin',
    size: 'large',
    topping: 'sausage',
    buildPizza: function () {
        console.log('buildPizza method has been called')
        message = `Baking a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping} and cheese. Just for you!`
        document.querySelector('#feedback').textContent = message
    },
    shopList: () => {
        console.log('Shopping list method has been called')
        let flour = 1
        if (pizza.crust === 'thick' && pizza.size === 'large') flour =2
        messageOne = `You will need to buy ${flour} cups of four and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = messageOne
        if (pizza.crust === 'thick' || pizza.size === 'large') flour *=2
        messageTwo = `You will need to buy ${flour} cups of four and 1 lb of ${pizza.topping}.`
        document.querySelector('#feedback').textContent = messageTwo
    }
}
//when a function becomes part of an object, it is called a METHOD

//thin radio selector
document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin')

//thick radio selector
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick')

//sausage radio selector
document.querySelector('#sausage').addEventListener('click', () => pizza.topping = 'sausage')

//pepperoni radio selector
document.querySelector('#pepperoni').addEventListener('click', () => pizza.topping = 'pepperoni')

//small radio selector
document.querySelector("#small").addEventListener('click', ()=> pizza.size = 'small')

//large radio selector
document.querySelector("#large").addEventListener('click', ()=> pizza.size = 'large')

//build button
document.querySelector('#build').addEventListener('click', pizza.buildPizza)

//build button
document.querySelector('#shop').addEventListener('click', pizza.shopList)


