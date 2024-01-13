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
let cartButton = document.querySelector("#cart-icon-button");
const modal = document.querySelector("[data-modal]");

cartButton.addEventListener("click", () => {
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
