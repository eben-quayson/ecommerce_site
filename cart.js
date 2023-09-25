
//Declaration and function for first shoe
const cartButton = document.querySelector('.addToCart')
let productId = document.querySelector('.id')
let productPrice = document.querySelector('.shoe1_price') 



cartButton.addEventListener('click', () => {
    const shoe1 = new Shoe(productId.innerHTML, productPrice.innerText)
    shoe1.pushToCart()
    alert(`You have added ${productId.innerHTML} to your cart`)
    shoe1.showCart()

})



//Declarations and function for second shoe

const cartButton2 = document.querySelector('.addToCart2')
let productId2 = document.querySelector('.id2')
let productPrice2 = document.querySelector('.shoe2_price') 


cartButton2.addEventListener('click', () => {
    const shoe2= new Shoe(productId2.innerHTML, productPrice.innerText)
    shoe2.pushToCart()
    alert(`You have added ${productId2.innerHTML} to your cart`)
    shoe2.showCart()

})






//Class declaration for shoe

const Shoe = class {
    constructor(id, price ){
        this.cart = [id, price]
    }
    pushToCart(){
        this.cart.push(Shoe)
        return this.cart
        
    }
    showCart(){
        console.log(this.cart)
    }
    


}

