import createProduct_Element from "./CreateProductElement.js";
import createProduct_obj from "./createProductOBJ.js";


let currentUser = "meow";
let logged_in = true;

let cart_arr = [];

document.addEventListener('DOMContentLoaded', function() {
    let SavedCart_arr = JSON.parse(localStorage.getItem("Cart_arr")) || [];
    let cart_arr_saved = [...SavedCart_arr];
    if (cart_arr_saved.length > 0){
        cart_arr = cart_arr_saved;
    }
    if (!logged_in){
        document.getElementById("main").innerHTML = "<h3>You need to Sign in to see your cart</h3>"
        return
    }
    if(cart_arr.length <= 0){
        document.getElementById("main").innerHTML = "<h3>Your Cart is Empty</h3>"
        return
    }
    cart_arr.forEach((product) =>{
        createProduct_Element(product.title,product.price,product.description,product.image,product.id);
    });


    
}, false);