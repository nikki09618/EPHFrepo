import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.getElementById('navbar').appendChild(createNavbar());
document.getElementById('footer').appendChild(createFooter());

const form = document.getElementById('signup-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (username && password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[username]) {
      alert('User already exists');
    } else {
      users[username] = { password };
      localStorage.setItem('users', JSON.stringify(users));
      alert('Signup successful! Please login.');
      form.reset();
      location.href = 'login.html';
    }
  } else {
    alert('Please enter username and password');
  }
});
