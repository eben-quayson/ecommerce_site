//import {  } from "module";

const products = [
    {
        id: 1,
        product: "shoe1",
        shoe_price: 2.88,
        numberInStock: 5
    },

    {
        id: 1,
        product: "shoe2",
        shoe_price: 7.88,
        numberInStock: 6
    }
]
const cart = [];


let addToCartBtn = document.querySelector(".addToCart")
addToCartBtn.addEventListener("click", addToCart)
addToCartBtn.innerHTML = addToCart()


var b = document.querySelector(".bought");
var s = document.querySelector(".sold")
if (evt){
    evt = b.addEventListener("click", bought)
}
else {
    evt = s.addEventListener("click", sold);
}



function bought() {
    products[id][numberInStock]--;
    cart = cart.push(products[id-1]);
    return cart;
    }


 function sold() {
    products[id][numberInStock]++;
    cart = cart.push(products[id-1]);
    return cart;
    }
function addToCart(){
    cart.push(products[id]);
    return cart;
}
