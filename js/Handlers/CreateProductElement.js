const products_Container = document.getElementById("products");

function meow() {
    console.log("meow");
}

// Creating Product Card Elements
export default function createProduct_Element(input_title = "Title",input_price = 0,input_description = "Description",input_image = "../../images/post.jpg",input_id,iscart=false) {
    const card = document.createElement("div");
    card.classList.add("card");
    products_Container.appendChild(card);
    

    const card_body = document.createElement("div");
    card_body.classList.add("card-body");
    card.appendChild(card_body);

    const center = document.createElement("center");
    card_body.appendChild(center);

    const image = document.createElement("img");
    image.src = input_image
    image.width = "286";
    image.height = "286";
    center.appendChild(image);

    const card_title = document.createElement("h5");
    card_title.classList.add("card-title");
    card_title.innerHTML = input_title;
    card_body.appendChild(card_title);

    const card_text = document.createElement("p");
    card_text.classList.add("card-text");
    card_text.innerHTML = input_description;
    card_body.appendChild(card_text);

    const stars = document.createElement("div");
    stars.innerHTML = `<span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>`;
    card_body.appendChild(stars);

    const price = document.createElement("p");
    price.classList.add("fs-16");
    price.classList.add("fw-500");
    price.innerHTML = `${input_price}$`;
    card_body.appendChild(price);
    if(!iscart){
        const addtocart= document.createElement("button");
        addtocart.classList.add("btn");
        addtocart.classList.add("btn-success");
        addtocart.classList.add("btn-addtocart");
        addtocart.innerHTML = "Add to cart";
        addtocart.dataset.id = input_id;
        card_body.appendChild(addtocart);
        // addtocart.setAttribute("id","addtocart");
    }

}