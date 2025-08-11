function addToCart(productName) {
  alert(productName + ' added to cart!');
  // You can use localStorage to store items
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(productName);
  localStorage.setItem("cart", JSON.stringify(cart));
}
