// Select the <ul> and button
    const ul = document.querySelector("ul");
    const button = document.querySelector("#addItemBtn");

    button.addEventListener("click", function () {
      // Create a new <li>
      const li = document.createElement("li");
      li.textContent = "New Item";

      // Get the next sequence number
      const count = ul.children.length + 1;

      // Apply styling based on odd/even
      if (count % 2 === 1) {
        li.style.fontWeight = "bold";
        li.style.color = "blue";
      } else {
        li.style.fontStyle = "italic";
        li.style.color = "red";
      }

      // Append the <li> to the <ul>
      ul.appendChild(li);
    });