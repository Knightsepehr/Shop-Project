import createProduct_Element from "./CreateProductElement.js"
import createProduct_obj from "./createProductOBJ.js"


export let shop_arr =  [];
let SavedShop_arr = JSON.parse(localStorage.getItem("Shop_arr")) || [];
let shop_arr_saved = [...SavedShop_arr];


document.addEventListener('DOMContentLoaded', function() {

    if (shop_arr_saved.length > 0){
        shop_arr_saved.forEach((product) =>{
            createProduct_Element(product.title,product.price,product.description,product.image,product.id);
        });
        shop_arr = [];
        shop_arr = [...shop_arr_saved];
    }
    else{
        let meow = createProduct_obj("Titelooo","Descriooo",123,"../../images/post.jpg",85);
        let meow2 = createProduct_obj("Titelooo","Descriooo",456,"../../images/post.jpg",86);
        let meow3 = createProduct_obj("Titelooo","Descriooo",123123,"../../images/post.jpg",87);
        let meow4 = createProduct_obj("Titelooo","Descriooo",435234523,"../../images/post.jpg",88);
        let meow5 = createProduct_obj("Titelooo","Descriooo",4444,"../../images/post.jpg",89);
        createProduct_Element(meow.price,meow.price,meow.description,meow.image);
        createProduct_Element(meow2.price,meow2.price,meow2.description,meow2.image,meow2.id);
        createProduct_Element(meow3.price,meow3.price,meow3.description,meow3.image,meow3.id);
        createProduct_Element(meow4.price,meow4.price,meow4.description,meow4.image,meow4.id);
        createProduct_Element(meow5.price,meow.price,meow.description,meow.image,meow5.id);
        shop_arr.push(meow)
        shop_arr.push(meow2)
        shop_arr.push(meow3)
        shop_arr.push(meow4)
        shop_arr.push(meow5)

    }

    console.log("Shop array:");
    console.log(shop_arr);

    localStorage.setItem("Shop_arr",JSON.stringify(shop_arr));
    

}, false);
