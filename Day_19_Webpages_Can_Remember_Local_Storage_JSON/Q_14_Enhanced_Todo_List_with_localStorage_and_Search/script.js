let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask() {
        let input = document.getElementById("taskInput");
        let text = input.value.trim();

        if (text === "") return alert("Task cannot be empty");

        let task = {
            id: Date.now(),
            text: text,
            completed: false
        };

        tasks.push(task);
        saveTasks();
        input.value = "";
        displayTasks();
    }

    function toggleTask(id) {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        saveTasks();
        displayTasks();
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        displayTasks();
    }

    function displayTasks(filteredTasks = tasks) {
        let list = document.getElementById("taskList");
        list.innerHTML = "";

        filteredTasks.forEach(task => {
            let li = document.createElement("li");

            let span = document.createElement("span");
            span.innerText = task.text;
            span.className = task.completed ? "completed" : "";
            span.onclick = () => toggleTask(task.id);

            let btn = document.createElement("button");
            btn.innerText = "X";
            btn.className = "delete";
            btn.onclick = () => deleteTask(task.id);

            li.appendChild(span);
            li.appendChild(btn);
            list.appendChild(li);
        });
    }

    function searchTasks() {
        let query = document.getElementById("searchInput").value.toLowerCase();
        let filtered = tasks.filter(task =>
            task.text.toLowerCase().includes(query)
        );
        displayTasks(filtered);
    }

    // Load tasks on startup
    displayTasks();