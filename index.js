//Selecting tags for shoe1
const incre = [document.querySelector('.increment'), document.querySelector('.increment2')]
const decre = [document.querySelector('.decrement'), document.querySelector('.decrement2')]
var quantity = document.querySelector('.in_stock')

//increment and decrement eventListener for shoe1 and shoe2
  incre[0].addEventListener('click', () => {
    increment()
})
 
incre[1].addEventListener('click', () => {
  quantity = document.querySelector('.in_stock2')  
  increment()
  quantity = document.querySelector('.in_stock')
})

decre[0].addEventListener('click', () => {
    decrement()
  
})
 
decre[1].addEventListener('click', () => {
  quantity = document.querySelector('.in_stock2')
  decrement()
  quantity = document.querySelector('in_stock')
})


//function declaration for inrementing number of products
function increment() {
    var itemQuanity = Number(quantity.innerHTML)
    itemQuanity++
    quantity.innerHTML = `${itemQuanity}`
}


//function declaration for decrementing number of products
function decrement() {
    let itemQuanity = Number(quantity.innerHTML)
    if (itemQuanity > 0){
        itemQuanity--
        quantity.innerHTML = `${itemQuanity}`}
        else {
            alert("out of stock")
        }

    
}






