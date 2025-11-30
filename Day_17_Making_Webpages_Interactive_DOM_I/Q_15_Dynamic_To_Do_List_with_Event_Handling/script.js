const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create elements
    const li = document.createElement("li");
    const span = document.createElement("span");
    const buttonGroup = document.createElement("div");

    // Set text
    span.textContent = taskText;

    // Create buttons
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Add button actions
    completeBtn.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    // Append buttons
    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(deleteBtn);

    // Append to li
    li.appendChild(span);
    li.appendChild(buttonGroup);

    // Append to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}