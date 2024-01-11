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
