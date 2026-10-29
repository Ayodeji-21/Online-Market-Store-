let qty = 1;
function changeQty(num) {
  qty += num;
  if (qty < 1) qty = 1;
  document.getElementById("qty").innerText = qty;
  document.getElementById("quantityInput").value = qty;
}
/*
  // GLOBAL VARIABLES TO STORE PRODUCT DATA
  let currentProduct = {};

  // FUNCTION 1: addToOrder(button)
  // This runs when user clicks "Order Now"
  function addToOrder(button){
    // 1. "button" = the button that was clicked
    // 2. ".closest('.product-card')" = Go up and find the parent product card
    const productCard = button.closest('.product-card');

    // 3. ".querySelector()" = Find elements inside that card and get their text
    const p = productCard.querySelector('.product-info').innerText;
    const price = productCard.querySelector('.price').innerText;
    const h3 = productCard.querySelector('.product h3').innerText;
    const img = productCard.querySelector('.product img').src; // .src gets the image link

    // 4. Save all data to our global object
    currentProduct = { h3, price, p, img };

    // 5. Call next function to display it
    displayProductInForm();
  }

  // FUNCTION 2: displayProductInForm()
  // This fills the order form with the product details
  function displayProductInForm(){
    const formSection = document.getElementById('orderForm');
    const productDiv = document.getElementById('Product');

    // 1. Make the order form visible
    formSection.classList.add('active'); 
    // .classList.add('active') adds the CSS class that sets display:block

    // 2. Fill the HTML inside the "selectedProduct" div
    productDiv.innerHTML = `
      <img src="${currentProduct.img}" alt="${currentProduct.h3}">
      <div>
        <h4>${currentProduct.h3}</h4>
        <p>${currentProduct.p}</p>
        <p style="font-weight:bold;">₦${Number(currentProduct.price).toLocaleString()}</p>
      </div>
    `;
    // ${} = Template literals. This injects JS variables into HTML

    // 3. Fill the HIDDEN form inputs so they are sent to email
    document.getElementById('productOrderedInput').value = `${currentProduct.name} - ${currentProduct.notes}`;
    document.getElementById('productPriceInput').value = `₦${Number(currentProduct.price).toLocaleString()}`;
    document.getElementById('productImageInput').value = currentProduct.image;

    // 4. Scroll down to the form so user sees it
    formSection.scrollIntoView({ behavior: 'smooth' });
    // .scrollIntoView() = JS function to auto scroll page
  }
*/
let Products = [
  {
    img: "rrr.jpg",
    name: "Dior Sauvage EDT 100ml",
    disc: "Fresh • Masculine • ConfidentS",
    price: "₦65,000",
    id:"card-1"
  },
  {
    img: "qqq.jpg",
    name: "Dior Sauvage EDT 100ml",
    disc: "Fresh • Masculine • ConfidentS",
    price: "₦65,000",
     id:"card-2"
  },
  {
    img: "rrr.jpg",
    name: "Dior Sauvage EDT 100ml",
    disc: "Fresh • Masculine • ConfidentS",
    price: "₦65,000",
     id:"card-3"
  },
];
  function displayProductInForm() {
    const formSection = document.getElementById("order-form");
    const productDiv = document.getElementById("product");
    formSection.classList.add("active");
    productDiv.innerHTML = `
      <img src="${currentProduct.img}" alt="${currentProduct.h3}">
      <div>
        <h4>${currentProduct.h3}</h4>
        <p>${currentProduct.p}</p>
        <p style="font-weight:bold;">₦${Number(currentProduct.price).toLocaleString()}</p>
      </div>
    `;
    document.getElementById("productOrderedInput").value =
      `${currentProduct.name} - ${currentProduct.notes}`;
    document.getElementById("productPriceInput").value =
      `₦${Number(currentProduct.price).toLocaleString()}`;
    document.getElementById("productImageInput").value = currentProduct.image;
  }
function addToOrder(button) {
  const product = button.closest(".product");
  const div = product.querySelector(".product-info").innerText;
  const price = product.querySelector(".price").innerText;
  const h3 = product.querySelector(".product h3").innerText;
  const img = product.querySelector(".product img").src;
  currentProduct = { h3, price, p, img };
  displayProductInForm();

}
