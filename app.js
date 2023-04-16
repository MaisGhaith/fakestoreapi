class Product {
    constructor(title, price, description, image) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;

    }
}

let products = []

//! get the products from api 
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 20; i++) {
            let productData = data[i];
            let getProduct = new Product(
                productData.title,
                productData.price,
                productData.description,
                productData.image
            );
            products.push(getProduct)

        }

        let htmlDiv = document.querySelector(".grid-container")

        htmlDiv.innerHTML = products.map(getProduct => {

            return `
    <div class="card p-2 m-1 align-items-center">
          <img src="${getProduct.image}" alt="${getProduct.title}">
          <h2>${getProduct.title}</h2>
          <span>$${getProduct.price}</span>
          <p>${getProduct.description}</p>
        </div>`;
        }).join('');
    })






