var incre = document.querySelectorAll('.increment')
var decre = document.querySelectorAll('.decrement')
var quantity = document.querySelector('.in_stock')

console.log(decre)
console.log(incre)
console.log(quantity)

for (i of incre) {
    i.addEventListener('click', () => {
        increment()
    })
    

}
 
for (i of decre){
    i.addEventListener('click', () => {
        decrement()
})
}

function increment() {
    var itemQuanity = Number(quantity.innerHTML)
    itemQuanity++
    quantity.innerHTML = `${itemQuanity}`
}

function decrement() {
    //
    var itemQuanity = Number(quantity.innerText)
    if (itemQuanity > 0){
        itemQuanity--
        quantity.innerHTML = `${itemQuanity}`}
        else {
            alert("out of stock")
        }

    
}




class cartProduct {
    constructor(customerId, id, price) {
      this.customerId = customerId
      this.id = id;
      this.price = price

      createCart() 
        let cart = []
        cart.push(customerId);
        cart.push(id);
        cart.push(price);
        return cart;
      }
    }


