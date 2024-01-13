function increaseQuantity() {
  let currentCount = document.getElementById("product-quantity").innerText;
  //   updating the value
  let newValue = parseInt(currentCount) + 1;
  document.getElementById("product-quantity").innerText = newValue;
}

function decreaseQuantity() {
  // check if the value is not 0
  let currentCount = parseInt(
    document.getElementById("product-quantity").innerText
  );

  if (currentCount != 0) {
    let newValue = currentCount - 1;
    document.getElementById("product-quantity").innerText = newValue;
  }
}

// adding event listener on the cart button so it opens up a modal for checkout
let cartIconButton = document.querySelector("#cart-icon-button");
const modal = document.querySelector("[data-modal]");

cartIconButton.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener("click", (e) => {
  // check if the user clicks outside the dimensions of the modal then close the modal
  const modalDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < modalDimensions.left ||
    e.clientX > modalDimensions.right ||
    e.clientY < modalDimensions.top ||
    e.clientY > modalDimensions.bottom
  ) {
    modal.close();
  }
});

// add selcted items to the cart
addToCartButton = document.querySelector(".cart-button");
addToCartButton.addEventListener("click", () => {
  document.querySelector(".cart-box").style.display = "flex";
  document.querySelector(".checkout-button").style.display = "block";
  document.querySelector(".empty-message").style.display = "none";
  let nameProduct = document.querySelector(".product-name").innerText;

  let productQuantityToAdd =
    document.querySelector("#product-quantity").innerText;
  document.querySelector("#product-quantity").innerText = "0";

  let priceToAdd = document.querySelector(".discount-price").innerText;
  let totalPrice =
    parseInt(productQuantityToAdd) * parseInt(priceToAdd.split("$")[1]);

  // adding price information to the cart modal
  document.querySelector(".name-product").innerText = nameProduct;
  document.querySelector(
    ".quantity-price"
  ).innerText = `${priceToAdd} X ${productQuantityToAdd}`;
  document.querySelector(".total-price").innerText = `$${totalPrice}`;
});

// remove button to remove added products in the cart
const removeProductsButton = document.querySelector(".remove-button");
removeProductsButton.addEventListener("click", () => {
  document.querySelector(".cart-box").style.display = "none";
  document.querySelector(".checkout-button").style.display = "none";
  document.querySelector(".empty-message").style.display = "block";
});

// change image in main product container according to different product views
elementsToAdd = document.getElementsByClassName("thumbnail-img");

for (const element of elementsToAdd) {
  element.addEventListener("click", () => {
    let imageToAdd = element.id;
    document
      .querySelector("#expanded-image")
      .setAttribute("src", `./images/${imageToAdd}.jpg`);
  });
}
