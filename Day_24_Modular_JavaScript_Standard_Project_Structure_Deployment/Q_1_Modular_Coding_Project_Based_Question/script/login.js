import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.getElementById('navbar').appendChild(createNavbar());
document.getElementById('footer').appendChild(createFooter());

const form = document.getElementById('login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value.trim();

  const users = JSON.parse(localStorage.getItem('users')) || {};
  if (users[username] && users[username].password === password) {
    localStorage.setItem('loggedInUser', username);
    location.href = 'todos.html';
  } else {
    alert('Invalid username or password');
  }
});
