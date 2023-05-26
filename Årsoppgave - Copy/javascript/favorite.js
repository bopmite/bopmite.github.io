function cartfavorite(){
    
    const favorite = JSON.parse(localStorage.getItem('favorite')) || [];
    const cartfavorite = document.getElementById('favorite-container');
    cartfavorite.innerHTML = '';
    
    favorite.forEach((product, index) => {
        cartfavorite.innerHTML += `
        <div class="favorite-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="favorite-item-content">
        <p class="favorite-info-item-header">${product.name}</p>
        <p>${product.description}</p>
        <p>Size: ${product.size}</p>
        </div>
        <p class="fav-prod-price">${product.price}</p>
        <div class="body-stock">
        <p> In stock </p>
        </div>
        <div class="info-cart-delete-div info-cart-3-cx cx-btn">
        <button class="remove-btn btr-mv" data-index="${index}">Remove from wishlist</button>
        </div>
        </div>
        `;
    });
}

function removeFromFavorite(event) {
    // Get the index of the product from the clicked remove button's data attribute
    const index = event.target.getAttribute('data-index');
    let favorite = JSON.parse(localStorage.getItem('favorite')) || [];

    // Remove the product from the favorite array and save the updated favorite list to local storage
    favorite.splice(index, 1);
    localStorage.setItem('favorite', JSON.stringify(favorite));

    // Refresh the favorite display
    wishlistDisplayBody();
    cartfavorite();
}

document.addEventListener('click', function(event) {
    if (event.target && event.target.className === 'remove-btn btr-mv') {
        removeFromFavorite(event);
    }
});


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
  
  function wishlistDisplayBody(){
    var wishlistDisplayBody = document.getElementById('favorite-hidden')
    var wishlist = JSON.parse(localStorage.getItem('favorite')) || [];
    var wishlistTitles = document.getElementById('favorite-titles');
  
    if(wishlist.length > 0){
      wishlistDisplayBody.style.display = "none"
      wishlistTitles.style.display = "flex"
    }
    else {
      wishlistDisplayBody.style.display = "flex"
      wishlistTitles.style.display = "none"
    }
  }



cartfavorite();