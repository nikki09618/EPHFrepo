const TODO_KEY = "todos";

    // Fetch & Store Todos
    async function fetchTodos() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await response.json();
      const first20 = todos.slice(0, 20);
      localStorage.setItem(TODO_KEY, JSON.stringify(first20));
      return first20;
    }

    // Load from Local Storage
    function loadTodos() {
      return JSON.parse(localStorage.getItem(TODO_KEY)) || [];
    }

    // Save to Local Storage
    function saveTodos(todos) {
      localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    }

    // Delete Todo
    function deleteTodo(id) {
      const todos = loadTodos().filter(todo => todo.id !== id);
      saveTodos(todos);
      renderTodos();
    }

    // Toggle Complete
    function toggleComplete(id) {
      const todos = loadTodos().map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      });
      saveTodos(todos);
      renderTodos();
    }

    // Render Todos
    function renderTodos() {
      const container = document.getElementById("todo-list");
      const noTodosMsg = document.getElementById("no-todos");
      const todos = loadTodos();

      container.innerHTML = "";

      if (todos.length === 0) {
        noTodosMsg.style.display = "block";
        return;
      } else {
        noTodosMsg.style.display = "none";
      }

      todos.forEach(todo => {
        const div = document.createElement("div");
        div.className = "todo";

        div.innerHTML = `
          <span class="${todo.completed ? 'completed' : ''}">${todo.title}</span>
          <div>
            <button class="toggle-btn" onclick="toggleComplete(${todo.id})">
              ${todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
          </div>
        `;

        container.appendChild(div);
      });
    }

    // Initialize App
    async function init() {
      if (!localStorage.getItem(TODO_KEY)) {
        await fetchTodos();
      }
      renderTodos();
    }

    init();