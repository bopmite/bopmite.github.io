document.addEventListener('DOMContentLoaded', () => {
class Product {
  constructor(id, name, description, price, imageUrl, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
}


 // Generates the HTML template for the Product instance

  generateProductHTML() {
    return `
      <div class="product" data-id="${this.id}" data-category="${this.category}">
        <img class="product-image" src="${this.imageUrl}" alt="${this.name}">
        <h3 class="product-name">${this.name}</h3>
        <p class="product-description">${this.description}</p>
        <span class="product-price">${this.price}</span>
      </div>`;
  }
}

// Function that displays products on the page
// products: array of Product instances
// targetElementId: id of the element to display the products

function displayProducts(products, targetElementId) {
  const targetElement = document.getElementById(targetElementId);
  let productsHTML = ""

  for (const product of products) {
    productsHTML += product.generateProductHTML();
  }

  targetElement.innerHTML = productsHTML;

  // Add click event listener to each product element
  const productElements = targetElement.querySelectorAll('.product');
  for (const productElement of productElements) {
    productElement.addEventListener('click', redirectToTemplatePage);
  }
}

// Index > Template redirection og definisjoner av class objekter til HTML 

function redirectToTemplatePage(event) {
  const productElement = event.currentTarget;
  const productData = {
    id: productElement.dataset.id,
    category: productElement.dataset.category,
    imageUrl: productElement.querySelector('.product-image').src,
    name: productElement.querySelector('.product-name').textContent,
    description: productElement.querySelector('.product-description').textContent,
    price: productElement.querySelector('.product-price').textContent,
  };
  localStorage.setItem('selectedProduct', JSON.stringify(productData));
  window.location.href = '../html/template.html';
}


// Sko informasjon

const Prod1  = new Product(1, 'Air Jordan 1', 'Retro High Off-White University Blue UNC', 'kr 32,599', '../images/shoes/Jordans/UniversityBlueUNC.png', 'Jordans');
const Prod2  = new Product(2, 'Air Jordan 1', 'High Zoom Air CMFT Fossil Lemon Twist', 'kr 2,999', '../images/shoes/Jordans/JordanHighZoomLemon.png', 'Jordans');
const Prod3  = new Product(3, 'Air Jordan 1', 'High Zoom Air CMFT Paris Saint-Germain', 'kr 4,499', '../images/shoes/Jordans/JordanCMFTParis.png', 'Jordans');
const Prod4  = new Product(4, 'Air Jordan 1', 'High Zoom Air CMFT Psychic Blue Sesam', 'kr 2,599', '../images/shoes/Jordans/JordanCMFSTPsychic.png', 'Jordans');
const Prod5  = new Product(5, 'Air Jordan 1', 'High Zoom Air CMFT Purple Patent', 'kr 2,999', '../images/shoes/Jordans/JordanCMFTPurple.png', 'Jordans');
const Prod6  = new Product(6, 'Air Jordan 1', 'Retro Purple (2018)', 'kr 6,700', '../images/shoes/Jordans/JordanRetroPurple.png', 'Jordans');
const Prod7  = new Product(7, 'Air Jordan 1', 'Retro High 85 Neutral Grey', 'kr 4,600', '../images/shoes/Jordans/JordanRetroNeutralGrey.png', 'Jordans');
const Prod8  = new Product(8, 'Air Jordan 1', 'Retro High Black Satin Gym Red', 'kr 3,199', '../images/shoes/Jordans/Jordan RetroBlackSatin.png', 'Jordans');
const Prod9  = new Product(9, 'Air Jordan 1', 'Retro High Court Purple (W)', 'kr 4,799 ', '../images/shoes/Jordans/Jordan RetroHighCourt.png', 'Jordans');
const Prod10 = new Product(10, 'Air Jordan 1', 'Retro High Dark Mocha', 'kr 8,999 ', '../images/shoes/Jordans/JordanMocha.png', 'Jordans');
const Prod11 = new Product(11, 'Air Jordan 1', 'Retro High Light Smoke Grey', 'kr 5,200', '../images/shoes/Jordans/JordanSmokeGrey.png', 'Jordans');
const Prod12 = new Product(12, 'Air Jordan 1', 'Retro High Dior', 'kr 76,999', '../images/shoes/Jordans/AirDior.png', 'Jordans');
const Prod13 = new Product(13, 'Air Jordan 1', 'Retro High Electro Orange', 'kr 3,900', '../images/shoes/Jordans/JordanElectroOrange.png', 'Jordans');
const Prod14 = new Product(14, 'Air Jordan 1', 'High OG Denim (W)', 'kr 3,999', '../images/shoes/Jordans/JordanOGDenim.png', 'Jordans');
const Prod15 = new Product(15, 'Air Jordan 1', 'High OG Seafoam (W)', 'kr 4,199', '../images/shoes/Jordans/JordanOGSeafoam.png', 'Jordans');

const Prod16  = new Product(16, 'Nike SB Dunk', 'HUF X Nike SB Dunk Low San Francisco', 'kr 3,500 ', '../images/shoes/SBDunks/HUFLowSF.png', 'SBDunks');
const Prod17  = new Product(17, 'Nike SB Dunk', 'Nike Dunk SB Low Orange Lobster', 'kr 6,999', '../images/shoes/SBDunks/LowOrangeLobster.png', 'SBDunks');
const Prod18  = new Product(18, 'Nike SB Dunk', 'Nike SB Dunk Low Atmos Elephant', 'kr 3,500', '../images/shoes/SBDunks/LowAtmosElephant.png', 'SBDunks');
const Prod19  = new Product(19, 'Nike SB Dunk', 'Nike SB Dunk Low Chlorophyll', 'kr 3,000', '../images/shoes/SBDunks/LowChlorophyll.png', 'SBDunks');
const Prod20  = new Product(20, 'Nike SB Dunk', 'Nike SB Dunk Low Grateful Dead Bears Green', 'kr 9,799', '../images/shoes/SBDunks/GratefulDeadBears.png', 'SBDunks');
const Prod21  = new Product(21, 'Nike SB Dunk', 'Nike SB Dunk Low Medicom Toy (2020)', 'kr 3,000 ', '../images/shoes/SBDunks/MedicomToy.png', 'SBDunks');
const Prod22  = new Product(22, 'Nike SB Dunk', 'Nike SB Dunk Low Mummy', 'kr 6,699', '../images/shoes/SBDunks/LowMummy.png', 'SBDunks');
const Prod23  = new Product(23, 'Nike SB Dunk', 'Nike SB Dunk Low Pro Bart Simpson', 'kr 2,999', '../images/shoes/SBDunks/BartSimpson.png', 'SBDunks');
const Prod24  = new Product(24, 'Nike SB Dunk', 'Nike SB Dunk Low Pro Orange Label Grey Gum', 'kr 2,599', '../images/shoes/SBDunks/ProOrangeGreyGum.png', 'SBDunks');
const Prod25  = new Product(25, 'Nike SB Dunk', 'Nike SB Dunk Low Pro St. Patricks Day (2022)', 'kr 3,000', '../images/shoes/SBDunks/StPatrickLows.png', 'SBDunks');
const Prod26  = new Product(26, 'Nike SB Dunk', 'Nike SB Dunk Low Raygun Tie-Dye Black', 'kr 6,000', '../images/shoes/SBDunks/RaygunTieDieBlack.png', 'SBDunks');
const Prod27  = new Product(27, 'Nike SB Dunk', 'Nike SB Dunk Low Supreme Black', 'kr 6,500', '../images/shoes/SBDunks/SupremeBlack.png', 'SBDunks');
const Prod28  = new Product(28, 'Nike SB Dunk', 'Nike SB Dunk Low Sandy Bodecker', 'kr 2,999', '../images/shoes/SBDunks/SandyBodecker.png', 'SBDunks');
const Prod29  = new Product(29, 'Nike SB Dunk', 'Nike SB Dunk Low Raygun Tie-Dye White', 'kr 6,500', '../images/shoes/SBDunks/RaygunTieDieWhite.png', 'SBDunks');

const Prod30  = new Product(30, 'Air Force 1', 'Low White Bag (2021)', 'kr 2,399', '../images/shoes/AirForce1/LowWhiteBag.png', 'AirForce');
const Prod31  = new Product(31, 'Air Force 1', 'Low Supreme White', 'kr 3,500', '../images/shoes/AirForce1/LowSupremeWhite.png', 'AirForce');
const Prod32  = new Product(32, 'Air Force 1', 'Low Pixel Earthscape (W)', 'kr 2,399', '../images/shoes/AirForce1/LowPixelEarthscape.png', 'AirForce');
const Prod33  = new Product(33, 'Air Force 1', 'Low Off-White MCA University Blue', 'kr 30,000', '../images/shoes/AirForce1/OffWhiteUniversityBlue.png', 'AirForce');
const Prod34  = new Product(34, 'Air Force 1', 'Low White Red (GS)', 'kr 1,999', '../images/shoes/AirForce1/LowWhiteBag.png', 'AirForce');
const Prod35  = new Product(35, 'Air Force 1', 'Mid LE Triple White (GS)', 'kr 2,000', '../images/shoes/AirForce1/MidLETripleWhite.png', 'AirForce');
const Prod36  = new Product(36, 'Air Force 1', 'Low 07 White', 'kr 2,000', '../images/shoes/AirForce1/Low07White.png', 'AirForce');
const Prod37  = new Product(37, 'Air Force 1', 'Low Clot Blue Silk', 'kr 3,500', '../images/shoes/AirForce1/LowClotBlueSlik.png', 'AirForce');
const Prod38  = new Product(38, 'Air Force 1', 'Low G-Dragon Peaceminusone Para-Noise', 'kr 8,500 ', '../images/shoes/AirForce1/LowGDragonPara.png', 'AirForce');
const Prod39 = new Product(39, 'Air Force 1', 'Low LV8 White (GS)', 'kr 1,799 ', '../images/shoes/AirForce1/LowLV8White.png', 'AirForce');
const Prod40 = new Product(40, 'Air Force 1', 'Stussy Fossil', 'kr 7,799 ', '../images/shoes/AirForce1/Stussy.png', 'AirForce');

const Prod41  = new Product(41, 'Yeezy Boost 350', 'V2 Black (Non-Reflective)', 'kr 4,899', '../images/shoes/Yeezys/V2Black.png', 'Yeezy');
const Prod42  = new Product(42, 'Yeezy Boost 350', 'V2 Black Red', 'kr 4,999', '../images/shoes/Yeezys/V2BlackRed.png', 'Yeezy');
const Prod43  = new Product(43, 'Yeezy Boost 350', 'V2 Bone', 'kr 4,499', '../images/shoes/Yeezys/V2Bone.png', 'Yeezy');
const Prod44  = new Product(44, 'Yeezy Boost 350', 'V2 Carbon', 'kr 4,599', '../images/shoes/Yeezys/V2Carbon.png', 'Yeezy');
const Prod45  = new Product(45, 'Yeezy Boost 350', 'V2 Natural', 'kr 4,999', '../images/shoes/Yeezys/V2Natural.png', 'Yeezy');
const Prod46  = new Product(46, 'Yeezy Boost 350', 'V2 Mono Mist', 'kr 3,700', '../images/shoes/Yeezys/V2Mono.png', 'Yeezy');
const Prod47  = new Product(47, 'Yeezy Boost 350', 'V2 Dazzling Blue', 'kr 4,600', '../images/shoes/Yeezys/V2Dazzling.png', 'Yeezy');
const Prod48  = new Product(48, 'Yeezy Boost 350', 'V2 Core Black Red', 'kr 4,199', '../images/shoes/Yeezys/V2CoreBlackRed.png', 'Yeezy');
const Prod49  = new Product(49, 'Yeezy Boost 350', 'V2 Oreo', 'kr 4,799 ', '../images/shoes/Yeezys/V2Oreo.png', 'Yeezy');
const Prod50 = new Product(50, 'Yeezy Boost 350', 'V2 Sand Taupe', 'kr 3,999 ', '../images/shoes/Yeezys/V2SandTaupe.png', 'Yeezy');
const Prod51 = new Product(51, 'Yeezy Boost 350', 'V2 Sesame', 'kr 4,200', '../images/shoes/Yeezys/V2Sesame.png', 'Yeezy');
const Prod52 = new Product(52, 'Yeezy Boost 350', 'V2 Slate', 'kr 4,200', '../images/shoes/Yeezys/V2Slate.png', 'Yeezy');

const Prod53  = new Product(53, 'Air Jordan 4', 'Lightning (2021)', 'kr 5,599', '../images/shoes/Jordan4/Lightning.png', 'Jordans');
const Prod54  = new Product(54, 'Air Jordan 4', 'Retro Red Thunder', 'kr 6,999', '../images/shoes/Jordan4/RedThunder.png', 'Jordans');
const Prod55  = new Product(55, 'Air Jordan 4', 'Shimmer (W)', 'kr 4,499', '../images/shoes/Jordan4/Shimmer.png', 'Jordans');
const Prod56  = new Product(56, 'Air Jordan 4', 'Retro University Blue', 'kr 3,599', '../images/shoes/Jordan4/UniversityBlue.png', 'Jordans');
const Prod57  = new Product(57, 'Air Jordan 4', 'Retro Metallic Purple', 'kr 4,999', '../images/shoes/Jordan4/PurpleMetal.png', 'Jordans');
const Prod58  = new Product(58, 'Air Jordan 4', 'Retro Military Black (GS)', 'kr 6,700', '../images/shoes/Jordan4/MilitaryBlack.png', 'Jordans');
const Prod59  = new Product(59, 'Air Jordan 4', 'Retro Infrared', 'kr 4,600', '../images/shoes/Jordan4/Infrared.png', 'Jordans');
const Prod60  = new Product(60, 'Air Jordan 4', 'Retro Taupe Haze', 'kr 3,199', '../images/shoes/Jordan4/Taupe.png', 'Jordans');




// Printer skoene

const currentURL = window.location.href;

const NewReleaseProducts = [
  Prod1,
  Prod2,
  Prod3,
  Prod4,
  Prod5,
  Prod6,
];

const BestSellerProducts = [
  Prod7,
  Prod8,
  Prod9,
  Prod10,
  Prod11,
  Prod12,
];

const ProductSpeccontainer = [
  Prod1,
  Prod2,
  Prod3,
  Prod4,
  Prod5,
  Prod6,
  Prod7,
  Prod8,
  Prod9,
  Prod10,
  Prod11,
  Prod12,
  Prod13,
  Prod14,
  Prod15,
  Prod16,
  Prod17,
  Prod18,
  Prod19,
  Prod20,
];

const ProductSpeccontainer2 = [
  Prod20,
  Prod21,
  Prod22,
  Prod23,
  Prod24,
  Prod25,
  Prod26,
  Prod27,
  Prod28,
  Prod29,
  Prod30,
  Prod31,
  Prod32,
  Prod33,
  Prod34,
  Prod35,
  Prod36,
  Prod37,
  Prod38,
  Prod39,
];

const ProductSpeccontainer3 = [
  Prod40,
  Prod41,
  Prod42,
  Prod43,
  Prod44,
  Prod45,
  Prod46,
  Prod47,
  Prod48,
  Prod49,
  Prod50,
  Prod51,
  Prod52,
  Prod53,
  Prod54,
  Prod55,
  Prod56,
  Prod57,
  Prod58,
  Prod59,
];


const JordanProductContainer = [
  Prod11,
  Prod6,
  Prod9,
  Prod13,
  Prod2,
  Prod4,
];

const AllTimeContainer = [
  Prod26,
  Prod7,
  Prod2,
  Prod29,
  Prod17,
  Prod14,
]

const CollabContainer = [
  Prod33, 
  Prod1, 
  Prod16, 
  Prod28,
  Prod40,
  Prod12
]

const TemplateContainer = [
  Prod34,
  Prod18,
  Prod6,
  Prod20,
  Prod39,
  Prod2,
];


const productSpecContainers = {
  1: shuffle(ProductSpeccontainer),
  2: shuffle(ProductSpeccontainer2),
  3: shuffle(ProductSpeccontainer3),
};

const productContainer = document.getElementById('ProductSpec-container');
const productButtons = Array.from(document.getElementsByClassName('product-button'));

productButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Function that changes the background color from transparent => lightblue or reverse on click.
    // Uses for each to define each button individually
    productContainer.innerHTML = '';
    productButtons.forEach(btn => btn.style.backgroundColor = 'transparent');
    this.style.backgroundColor = 'lightblue';

    productSpecContainers[index+1].forEach(product => {
      // HTML layout that matches original one for updated containers
      productContainer.innerHTML += `
        <div class="product" data-id="${product.id}" data-category="${product.category}">
          <img class="product-image" src="${product.imageUrl}" alt="${product.name}">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <span class="product-price">${product.price}</span>
        </div>
      `;
    });

    // Get each element of the "Product" element, each element runs the redirectToTemplatePage on click through event listeners.
    Array.from(productContainer.getElementsByClassName('product')).forEach(el => {
      el.addEventListener('click', redirectToTemplatePage);
    });
  });
});




// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// ...

if (currentURL.endsWith("index.html")) {
  displayProducts(NewReleaseProducts, "NewReleaseProducts-container");
  displayProducts(BestSellerProducts, "BestSellerProducts-container");
  displayProducts(JordanProductContainer, "JordanStockDisplay-container");
  displayProducts(AllTimeContainer, "AllTimeFavorite-container");
  displayProducts(CollabContainer, "CollabProducts-container");
} if (currentURL.endsWith("ProductPage.html")) {
  shuffle(ProductSpeccontainer);
  displayProducts(ProductSpeccontainer, "ProductSpec-container");
}
if (currentURL.endsWith("blue.html")) {
  displayProducts(CollabContainer, "CollabProducts-container");
}
  shuffle(TemplateContainer);
  displayProducts(TemplateContainer, "TemplateShowcase-container");


document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);

function addToCart() {
    // Get the product data
    const productName = document.querySelector('.shoe-details-headers h1').innerText;
    const productDescription = document.querySelector('.shoe-details-headers h2').innerText;
    const productPrice = document.querySelector('.price').innerText;
    const productImage = document.querySelector('.shoe-image img').getAttribute('src');
    const selectedSize = document.querySelector('input[name="skuAndSize"]:checked');
    const productSize = selectedSize ? selectedSize.nextElementSibling.innerText : 'No size selected';

    // Create a product object
    // Create a product object
    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
        size: productSize,
        quantity: 1,
    };

    // Get the cart from local storage
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];

    // Add the product to the cart
    cart.push(product);
    // Save the cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};


document.getElementById('favorite-btn').addEventListener('click', addToFavorite);

function addToFavorite() {
  // Get the product data
  const productName = document.querySelector('.shoe-details-headers h1').innerText;
  const productDescription = document.querySelector('.shoe-details-headers h2').innerText;
  const productPrice = document.querySelector('.price').innerText;
  const productImage = document.querySelector('.shoe-image img').getAttribute('src');
  const selectedSize = document.querySelector('input[name="skuAndSize"]:checked');
  const productSize = selectedSize ? selectedSize.nextElementSibling.innerText : 'No size selected';

  // Create a product object
  // Create a product object
  const product = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage,
      size: productSize,
      quantity: 1,
  };

  // Get the cart from local storage
  let favorite = localStorage.getItem('favorite');
  favorite = favorite ? JSON.parse(favorite) : [];

  // Add the product to the cart
  favorite.push(product);
  // Save the cart back to local storage
  localStorage.setItem('favorite', JSON.stringify(favorite));
  updateCartCount();
};




});


