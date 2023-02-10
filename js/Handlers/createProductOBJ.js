export default function createProduct_obj(title,description,price,image,id) {
    const newProduct = {
        title:title,
        description:description,
        price:price,
        image:image,
        id:id,
    };
    return newProduct;
}