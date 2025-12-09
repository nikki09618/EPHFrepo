import { createNavbar } from './navbar.js';
import { createFooter } from './footer.js';

document.getElementById('navbar').appendChild(createNavbar());
document.getElementById('footer').appendChild(createFooter());