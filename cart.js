
//Declaration and function for first shoe
const cartButton = document.querySelector('.addToCart')
let productId = document.querySelector('.id')
let productPrice = document.querySelector('.shoe1_price') 
var cart = []


cartButton.addEventListener('click', () => {
    const shoe1 = new Shoe(productId.innerHTML, productPrice.innerText)
    let product1 = shoe1.pushToCart()
    cart.push(product1)
    alert(`You have added ${productId.innerHTML} to your cart`)
    shoe1.showCart()

})



//Declarations and function for second shoe

const cartButton2 = document.querySelector('.addToCart2')
let productId2 = document.querySelector('.id2')
let productPrice2 = document.querySelector('.shoe2_price') 


cartButton2.addEventListener('click', () => {
    const shoe2= new Shoe(productId2.innerHTML, productPrice.innerText)
    let product2 = shoe2.pushToCart()
    cart.push(product2)
    
    alert(`You have added ${productId2.innerHTML} to your cart`)
    shoe2.showCart()

})



//Class declaration of items


const Shoe = class {
    constructor(id, price ){
        this.cart = [id, price]
    }
    pushToCart(){
        return this.cart
        
    }
    showCart(){
        console.log(cart)
    }
    


}

