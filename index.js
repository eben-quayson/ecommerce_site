const incre = [document.querySelector('.increment'), document.querySelector('.increment2')]
const decre = [document.querySelector('.decrement'), document.querySelector('.decrement2')]
var quantity = document.querySelector('.in_stock')


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
  quantity = document.querySelector('.in_stock')
  decrement()
  quantity = document.querySelector('in_stock')
})



function increment() {
    var itemQuanity = Number(quantity.innerHTML)
    itemQuanity++
    quantity.innerHTML = `${itemQuanity}`
}

function decrement() {
    //
    let itemQuanity = Number(quantity.innerHTML)
    if (itemQuanity > 0){
        itemQuanity--
        quantity.innerHTML = `${itemQuanity}`}
        else {
            alert("out of stock")
        }

    
}




const cartButton = document.querySelector('addToCart')
const productPrice = document.querySelector('shoe1_price')
const productId = document.querySelector('id')

cartButton.addEventListener('click', () => {
  shoe1 = new Shoe(productId.innerHTML, productPrice.innerHTML)
  shoe1.pushToCart()
  })
 let date = new Date   

const Shoe = class {
  constructor(id, price){
      this.cart = [date, id, price]
  }
  pushToCart(){
    return this.cart
  }
}

