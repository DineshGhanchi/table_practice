// JavaScript code for your decoration and gift shop website

// Add event listeners to "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.card button');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

// Function to handle adding a product to the cart
function addToCart(event) {
  var product = event.target.parentNode;
  var productName = product.querySelector('h3').textContent;

  // You can add your own logic here to handle adding the product to the cart
  // For example, you can use localStorage to store the cart items or make an API call

  // Just for demonstration purposes, we'll log the product name to the console
  console.log('Added to cart: ' + productName);
}
