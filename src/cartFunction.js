// Create a cart array to store all items
let cart = [];

// Function to add items to cart
function addToCart(productId, name, price, quantity) {
  // Check if item already exists in cart
  const existingItemIndex = cart.findIndex(
    (item) => item.productId === productId
  );

  if (existingItemIndex !== -1) {
    // If item exists, update quantity
    cart[existingItemIndex].quantity += quantity;
    cart[existingItemIndex].subtotal =
      cart[existingItemIndex].quantity * cart[existingItemIndex].price;
  } else {
    // If new item, add to cart
    const newItem = {
      productId,
      name,
      price,
      quantity,
      subtotal: price * quantity,
    };
    cart.push(newItem);
  }

  // Calculate and display new total
  displayCart();
}

// Function to calculate cart total
function calculateTotal() {
  return cart.reduce((total, item) => total + item.subtotal, 0);
}

// Function to display cart
function displayCart() {
  console.log("Current Cart Items:");
  cart.forEach((item) => {
    console.log(
      `${item.name} - Quantity: ${item.quantity} - Subtotal: $${item.subtotal}`
    );
  });
  console.log(`Total: $${calculateTotal()}`);
}

// Function to update quantity
function updateQuantity(productId, newQuantity) {
  const item = cart.find((item) => item.productId === productId);
  if (item) {
    item.quantity = newQuantity;
    item.subtotal = item.price * newQuantity;
    displayCart();
  }
}

// Function to remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.productId !== productId);
  displayCart();
}

// Example usage:
addToCart(1, "T-shirt", 20, 2); // Add 2 T-shirts
addToCart(2, "Jeans", 50, 1); // Add 1 pair of jeans
addToCart(1, "T-shirt", 20, 1); // Add 1 more T-shirt

// Update quantity of T-shirts
updateQuantity(1, 5);

// Remove jeans from cart
removeFromCart(2);
