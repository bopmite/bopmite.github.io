function updateCartCount() {
  var cart = JSON.parse(localStorage.getItem('cart')) || [];
  var itemCount = cart.length;
  var cartNrDisplay = document.getElementById('red-icon-nr');
  cartNrDisplay.textContent = itemCount;
  var cartNrBody = document.getElementById('nav-car-red-icon');

  if(cart.length < 1){
    cartNrBody.style.display = "none"
  }
  else {
    cartNrBody.style.display = "flex"
  }
}



document.addEventListener('DOMContentLoaded', function() {
  
  if (document.getElementById('favorite-btn') && document.getElementById('add-to-cart-btn')) {
    document.getElementById('favorite-btn').addEventListener('click', function() {
      const svg = document.getElementById('favorite-svg');
      svg.classList.toggle('fill-heart');
    });

    const CheckBtn = document.getElementById('add-to-cart-btn');
    CheckBtn.addEventListener('click', function() {
      
      const LoadingContainer = document.getElementById('loading-container');
      const buttonText = document.getElementById('add-to-cart-btn-text');
      const ItemAddedContainer = document.getElementById('item-added-container');

      LoadingContainer.style.display = "block";
      LoadingContainer.style.opacity = 1;
      buttonText.style.display = "none"
      setTimeout(() => {
        LoadingContainer.style.display = "none";
        LoadingContainer.style.opacity = 0;
        ItemAddedContainer.style.display = "block";
        ItemAddedContainer.style.opacity = 1;
      }, 1000);

      setTimeout(() => {
        ItemAddedContainer.style.display = "none";
        ItemAddedContainer.style.opacity = 0;
        buttonText.style.display = "block"
      }, 3000);
    });
  }
});






updateCartCount();
wishlistDisplayBody();
cartHiddenDisplay();















  
  
  
  
  










