function addParagraph() {
            // Create a new paragraph element
            var para = document.createElement("p");

            // Add text to the paragraph
            para.textContent = "This is a new paragraph.";

            // Append the paragraph to the div
            document.getElementById("container").appendChild(para);
        }

        function removeParagraph() {
            var container = document.getElementById("container");

            // Remove the last paragraph if it exists
            if (container.lastChild) {
                container.removeChild(container.lastChild);
            }
        }