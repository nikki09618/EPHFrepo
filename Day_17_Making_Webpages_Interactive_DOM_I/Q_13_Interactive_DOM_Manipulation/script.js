function changeBackground() {
      const color = document.getElementById("colorInput").value.trim();
      const box = document.getElementById("box");

      // Create a temporary element to check color validity
      const test = document.createElement("div");
      test.style.color = color;

      if (test.style.color === "") {
        alert("Invalid color name!");
      } else {
        box.style.backgroundColor = color;
      }
    }

    function updateText() {
      const text = document.getElementById("textInput").value.trim();
      const box = document.getElementById("box");

      if (text === "") {
        alert("Please enter some text!");
      } else {
        box.textContent = text;
      }
    }