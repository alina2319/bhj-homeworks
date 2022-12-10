"use strict";

const products = document.querySelector(`.products`);

function productIdentifier(target) {
    let someParent = target.closest(`.product__quantity-controls`);    
    let productValueAdd = someParent.querySelector(`.product__quantity-value`);
    return productValueAdd;
}

function productIdIdentifier(target) {    
    let someParent = target.closest(`.product`);
    let productIdAdd = someParent.getAttribute(`data-id`);    
    return productIdAdd;
}

function productImageIdentifier(target) {
    let someParent = target.closest(`.product`);
    let productImage = someParent.querySelector(`.product__image`);
    let productImageAdd = productImage.src;
    return productImageAdd;
}

function productValueIdentifier(target) {
    let someParent = target.closest(`.product`);
    let productValueAdd = someParent.querySelector(`.product__quantity-value`);
    return productValueAdd.textContent;
}

function addNewCart(target) {
    const cartProducts = document.querySelector(`.cart__products`);
    let productValueAdd = productValueIdentifier(target);
    let productIdAdd = productIdIdentifier(target);
    let productImageAdd = productImageIdentifier(target);

    cartProducts.insertAdjacentHTML(`beforeEnd`, `<div class="cart__product" data-id="${productIdAdd}">
        <img class="cart__product-image" src="${productImageAdd}">
        <div class="cart__product-count">${productValueAdd}</div>
    </div>`);
}

products.onclick = function(event) {
    let target = event.target;
    let cartAddedProducts = document.querySelectorAll(`.cart__product`);
    let cartAddedProductsLength = cartAddedProducts.length;

    if ( target.classList.contains(`product__quantity-control_dec`) ) {
        let productValueAdd = productIdentifier(target);
        if (productValueAdd.textContent > 1) {
            productValueAdd.textContent--;
        }

    } else if ( target.classList.contains(`product__quantity-control_inc`) ) {
        let productValueAdd = productIdentifier(target);
        productValueAdd.textContent++;

    } else if ( target.classList.contains(`product__add`) ) {
        if (cartAddedProductsLength == 0) {
            addNewCart(target);
        } else {
            let productIdAdd = productIdIdentifier(target);
            let productValueAdd = productValueIdentifier(target);
    
            for (let i = 0; i < cartAddedProductsLength; i++) {
                if ( cartAddedProducts[i].getAttribute(`data-id`) == productIdAdd ) {
                    let cartProductCount = parseInt(cartAddedProducts[i].querySelector(`.cart__product-count`).textContent);
                    let newProductValue = cartProductCount + parseInt(productValueAdd);
                    cartAddedProducts[i].querySelector(`.cart__product-count`).textContent = newProductValue;
                    break;
                } else if ( (cartAddedProducts[i].getAttribute(`data-id`) !== productIdAdd) && (i == cartAddedProductsLength - 1) ) {
                    addNewCart(target);
                }
            }
        }
        cartAddedProducts = document.querySelectorAll(`.cart__product`);
        cartAddedProductsLength = cartAddedProducts.length;
    }
}