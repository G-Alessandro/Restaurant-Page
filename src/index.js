import './style.css';
import { createHome } from './home';
import { createMenu } from './menu';
import { createContact } from './contact';

const home = document.getElementById('tab-home');
const menu = document.getElementById('tab-menu');
const contact = document.getElementById('tab-contact');

home.addEventListener('click', () => {
  home.style.borderBottom = '0.2rem solid white';
  menu.style.borderBottom = 'none';
  contact.style.borderBottom = 'none';
  createHome();
});

menu.addEventListener('click', () => {
  home.style.borderBottom = 'none';
  menu.style.borderBottom = '0.2rem solid white';
  contact.style.borderBottom = 'none';
  createMenu();
});

contact.addEventListener('click', () => {
  home.style.borderBottom = 'none';
  menu.style.borderBottom = 'none';
  contact.style.borderBottom = '0.2rem solid white';
  createContact();
});

createHome();
