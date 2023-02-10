import {shop_arr} from "./shop.js"

let cart_arr = [];

document.addEventListener('DOMContentLoaded', function() {
    let SavedCart_arr = JSON.parse(localStorage.getItem("Cart_arr")) || [];
    let cart_arr_saved = [...SavedCart_arr];
    let flag = false;
    let buttons = document.querySelectorAll(".btn-addtocart");
    document.getElementById("clearCart").addEventListener("click",()=>{
        cart_arr = [];
        cart_arr_saved = [];
        localStorage.setItem("Cart_arr",JSON.stringify(cart_arr));
    });
    buttons.forEach((element) =>{
        element.addEventListener("click",()=>{
            console.log(element.dataset.id);
            shop_arr.forEach((product)=>{
                if(product.id == element.dataset.id){
                    cart_arr.push(product);
                    console.log(product);
                    console.log(cart_arr);
                    if(cart_arr_saved.length > 0 && flag == false){
                        console.log("not empty cart arr saved");
                        cart_arr = cart_arr_saved;
                    }
                    localStorage.setItem("Cart_arr",JSON.stringify(cart_arr));

                }
            });
        });
    });
});



console.log("Cart Array:");
console.log(cart_arr);

