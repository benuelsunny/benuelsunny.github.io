// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get references to the submit button and the contact page
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");

// Add a click event listener to the submit button
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Added to prevent the form from submitting and reloading the page

  // Create a new paragraph element and set its content and style
  const thankYouMessage = document.createElement("p");

  thankYouMessage.textContent = "Thank you for your message";
  thankYouMessage.style.fontSize = "24px";
  thankYouMessage.style.textAlign = "center";
  thankYouMessage.style.marginTop = "50px";

  // Clear the existing content of the contact page and append the thank you message to the contact page
  contactPage.innerHTML = "";
  contactPage.appendChild(thankYouMessage);
});
