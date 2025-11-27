const loading = setInterval(() => {
    console.log("Loading...");
}, 1000); // runs every 1 second

setTimeout(() => {
    clearInterval(loading);  // stop the loading messages
    console.log("Loaded successfully!");
}, 5000); // stop after 5 seconds
