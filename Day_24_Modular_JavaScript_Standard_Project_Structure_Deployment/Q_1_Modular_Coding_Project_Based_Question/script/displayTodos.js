export function displayTodos(todos) {
  const container = document.getElementById('todos-container');
  container.innerHTML = ''; // Clear previous

  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.style.border = '1px solid #ddd';
    todoItem.style.margin = '5px';
    todoItem.style.padding = '8px';
    todoItem.style.borderRadius = '5px';

    todoItem.innerHTML = `
      <h4>${todo.title}</h4>
      <p>Status: <strong>${todo.completed ? 'Completed' : 'Pending'}</strong></p>
    `;
    container.appendChild(todoItem);
  });
}
