import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';
import { displayTodos } from './displayTodos.js';

const loggedInUser = localStorage.getItem('loggedInUser');
if (!loggedInUser) {
  alert('Please login first');
  location.href = 'login.html';
}

document.getElementById('navbar').appendChild(createNavbar());
document.getElementById('footer').appendChild(createFooter());

fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(response => response.json())
  .then(data => displayTodos(data))
  .catch(err => {
    const container = document.getElementById('todos-container');
    container.textContent = 'Failed to load todos.';
  });
