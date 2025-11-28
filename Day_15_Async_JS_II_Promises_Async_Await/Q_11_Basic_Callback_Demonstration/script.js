// Function to display greeting message
function displayMessage(name) {
  console.log("Hello, " + name + "!");
}

// Function that simulates getting user input after 1 second
function getUserInput(callback) {
  setTimeout(function () {
    const username = "Alice";
    callback(username);
  }, 1000);
}

getUserInput(displayMessage);
