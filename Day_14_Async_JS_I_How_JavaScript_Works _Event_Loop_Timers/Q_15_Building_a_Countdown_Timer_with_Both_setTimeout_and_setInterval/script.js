let time = parseInt(prompt("Enter number of seconds to count down:"));

if (isNaN(time) || time <= 0) {
  console.log("Please enter a valid positive number.");
} else {

  console.log(`Countdown starting from ${time} seconds...`);
  console.log("Press 's' to stop the timer anytime.");

  let timer = setInterval(() => {
    console.log(`Time left: ${time} seconds`);
    time--;

    if (time < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
    }
  }, 1000);


  function checkKeyPress() {

    setTimeout(() => {

      function handler(event) {
        if (event.key === "s") {
          clearInterval(timer);
          console.log("Countdown stopped by user.");
          document.removeEventListener("keydown", handler);
        }
      }

      document.addEventListener("keydown", handler);

      if (time >= 0) {
        checkKeyPress();
      }

    }, 200);
  }

  checkKeyPress();
}


