import { button } from './components/button.js';
import { header } from './components/header.js';
import { buttonsData } from './data/buttonsData.js';
const body = document.querySelector('body');

body.appendChild(header());

buttonsData.forEach((_button) => {
  body.appendChild(button(_button));
});
