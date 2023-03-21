function applyDiscount(price, discountPercentage) {
  return price * (1 - discountPercentage);
}

function updatePriceWithDiscount(discountPercentage) {
  // Get the source element by its class name
  var sourceElement = document.querySelector(".course-button-price strong");
  // Extract the price
  var originalPrice = parseFloat(sourceElement.textContent || sourceElement.innerText);

  // Calculate the discounted price
  var discountedPrice = applyDiscount(originalPrice, discountPercentage);

  // Format the discounted price to two decimal places
  var formattedDiscountedPrice = discountedPrice.toFixed(2);

  // Get the button element by its ID
  var buttonElement = document.getElementById("el_1679404282925_426");
  // Get the span element inside the button by its ID
  var buttonTextElement = document.getElementById("el_1679404282925_434");
  // Set the "Enrol Now" text, original price, and discounted price as the content of the span element inside the button
  buttonTextElement.innerHTML = "Enrol Now - <span style='text-decoration: line-through;'>$" + originalPrice + "</span> $" + formattedDiscountedPrice;
}
