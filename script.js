document.addEventListener("DOMContentLoaded", function () {
  // Define an array of strings to be displayed and erased
const textArray = [
  "FULL-STACK DEVELOPER",
  "OPEN SOURCE CONTRIBUTOR",
  "MERN STACK DEVELOPER"
  // Add more strings as needed
];

// Initialize variables
let typeJsText = document.querySelector(".animatedText");
let stringIndex = 0; // Index of the current string in the array
let charIndex = 0; // Index of the current character in the current string
let isTyping = true; // Whether we are currently typing or erasing

function typeJs() {
  if (stringIndex < textArray.length) {
    const currentString = textArray[stringIndex];

    if (isTyping) {
      // Typing animation
      if (charIndex < currentString.length) {
        typeJsText.textContent += currentString.charAt(charIndex);
        charIndex++;
      } else {
        isTyping = false; // Switch to erasing mode
      }
    } else {
      // Erasing animation
      if (charIndex > 0) {
        typeJsText.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
      } else {
        isTyping = true; // Switch back to typing mode
        stringIndex++; // Move to the next string

        if (stringIndex >= textArray.length) {
          stringIndex = 0; // Reset to the beginning of the array
        }

        charIndex = 0; // Reset character index
        typeJsText.textContent = ""; // Clear the content for the new string
      }
    }
  }
}

// Set an interval to call the typeJs function
setInterval(typeJs, 100); // You can adjust the animation speed as needed
  // Your JavaScript code here
});

  