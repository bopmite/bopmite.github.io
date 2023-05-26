
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach((product, index) => {
        cartContainer.innerHTML += `
        <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
        <p class="cart-info-item-header">${product.name}</p>
        <p>${product.description}</p>
        <p>Size: ${product.size}</p>
        <p>Qty: <span class="quantity">${product.quantity}</span></p>
        </div>
        <div class="info-cart-qty-wrap">
        <div class="cart-qty-add carty-qty" data-index="${index}">+</div>
        <div class="cart-qty-amo carty-qty"><input type="text" id="cart-qty-inputField" data-index="${index}" placeholder="${product.quantity}" name="qtyField"></div>
        <div class="cart-qty-rem carty-qty" data-index="${index}">-</div>
        </div>
        <div class="full-inf-body-3-t">
        <div class="info-cart-delete-div info-cart-3-cx">
        <button class="remove-btn" data-index="${index}"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
        </svg></button>
        </div>
        <div class="info-cart-price-div info-cart-3-cx">
        <p>${product.price}</p>
        </div>
        <div class="info-cart-total-div info-cart-3-cx">
        <p>kr ${(parseFloat(product.price.replace(/[^0-9.]+/g, '')) * product.quantity)}</p>
        </div>
        </div>
    </div>
        `;
    });


    

 // Add event listeners to the '+' buttons to increase the quantity of each product
     cartContainer.querySelectorAll('.cart-qty-add').forEach((addButton, index) => {
         addButton.addEventListener('click', () => changeQuantity(index, 1));
        });


    // Add event listeners to the '-' buttons to decrease the quantity of each product
    cartContainer.querySelectorAll('.cart-qty-rem').forEach((removeButton, index) => {
        removeButton.addEventListener('click', () => changeQuantity(index, -1));
    });

    // Add event listeners to the quantity input fields to update the quantity of each product
    cartContainer.querySelectorAll('#cart-qty-inputField').forEach((inputField, index) => {
        inputField.addEventListener('input', (event) => {
            changeQuantity(index, 0, event.target.value);
        });
    });

    // Add event listeners to the remove buttons to remove items from the cart
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Function to change the quantity of a product in the cart
// index: the index of the product in the cart array
// delta: the change in quantity (+1, -1, or 0 for a specific value)
// newValue: the new quantity value, if delta is 0
function changeQuantity(index, delta, newValue) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Update the product quantity based on the delta or newValue provided
    if (newValue !== undefined) {
        cart[index].quantity = Math.max(1, parseInt(newValue));
    } else {
        cart[index].quantity = Math.max(1, cart[index].quantity + delta);
    }

    // Save the updated cart to local storage and refresh the cart display
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Function to remove a product from the cart
// event: the click event from the remove button
function removeFromCart(event) {
    // Get the index of the product from the clicked remove button's data attribute
    const index = event.target.getAttribute('data-index');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Remove the product from the cart array and save the updated cart to local storage
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Refresh the cart display
    updateCartCount();
    displayCart();
    cartHiddenDisplay();
}

window.onload = function() {
    var pageURL = window.location.pathname;
    var pageName = pageURL.substring(pageURL.lastIndexOf('/') + 1);
  
    if (pageName === 'Favoritt.html') {
      wishlistDisplayBody();
    } 
    else if (pageName === 'Cart.html') {
      cartHiddenDisplay();
    }
  }

  function cartHiddenDisplay(){
    var cartDisplayBody = document.getElementById('cart-hidden')
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartBody = document.getElementById('ShoppingCartContainer');
  
    if(cart.length > 0){
      cartDisplayBody.style.display = "none";
      cartBody.style.display = "flex";
    }
    else {
      cartDisplayBody.style.display = "flex"
      cartBody.style.display = "none"
    }
  }

// Call displayCart function to show the cart when the page loads

    displayCart();




