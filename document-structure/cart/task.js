const products = document.querySelectorAll(".product");
const productQuantity = document.querySelectorAll(".product__quantity-value");
const cartProducts = document.querySelector(".cart__products");

function addProductInCart(id, item, image) {
    return `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-count">${item}</div>
            </div>`
}

for (let i = 0; i < products.length; i++) {
    products[i].addEventListener("click", (event) => {
        let targetItem = event.target;
        event.preventDefault();
        if (targetItem.classList.contains("product__quantity-control_dec")) {
            if (productQuantity.item(i).textContent > 1) {
                productQuantity.item(i).textContent--;
            }             
        }
        
        if (targetItem.classList.contains("product__quantity-control_inc")) {
            productQuantity.item(i).textContent++;     
        }

        if (targetItem.classList.contains("product__add")) {
            let targetImage = targetItem.closest(".product").querySelector('.product__image').getAttribute('src');
            let targetId = targetItem.closest(".product").dataset.id;
            let targetValue = targetItem.closest(".product").querySelector('.product__quantity-value').textContent;    
           
            if (cartProducts.children.length !== 0) {
                if (cartProducts.querySelector(`[data-id="${targetId}"]`)) {
                    cartProducts.querySelector(`[data-id="${targetId}"]`).querySelector('.cart__product-count').textContent = Number(cartProducts.querySelector(`[data-id="${targetId}"]`).querySelector('.cart__product-count').textContent) + Number(targetValue);
                } else {
                    cartProducts.innerHTML += addProductInCart(targetId, Number(targetValue), targetImage);
                }
            } else {
                cartProducts.innerHTML += addProductInCart(targetId, Number(targetValue), targetImage);
            }           
        }        
    });
}