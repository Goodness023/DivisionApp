// Generate two random numbers between 1 and 20
const num1 = Math.ceil(Math.random() * 20); // Generates a random number between 1-20
const num2 = Math.ceil(Math.random() * 20); // Generates a random number between 1-20

// Select DOM elements
const questionEL = document.getElementById("question"); // Get the question element
const inputEL = document.getElementById("input"); // Get the input field
const formEL = document.getElementById("form"); // Get the form element
const scoreEL = document.getElementById("score"); // Get the score element

// Retrieve score from local storage or initialize it
let score = JSON.parse(localStorage.getItem("score")); // Parse stored score
if (score === null) {
  score = 0; // Set score to 0 if it's not stored
}

// Update score display
scoreEL.innerText = `Score: ${score}`;

// Update question text
questionEL.innerText = `What is ${num1} muliplied by ${num2}?`;

// Calculate the correct answer
const correctAns = num1 * num2;

// Event listener for form submission
formEL.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  const userAns = parseFloat(inputEL.value); // Convert input to a number

  // Check if user input matches the correct answer
  if (userAns === correctAns) {
    score++; // Increase score if correct
    updateLocalStorage();
  } else {
    score--; // Decrease score if incorrect
    updateLocalStorage();
  }

  // Clear the input field after submission
  inputEL.value = "";
});

// Function to update the score in local storage
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score)); // Save score to local storage
  scoreEL.innerText = `Score: ${score}`; // Update score display
}
