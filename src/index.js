import {
//   getApiInfo,
//   marineWeather,
//   showForeCast,
//   showHistory,
} from './apiFunctions';
import { searchAndAutoComplete } from './autocomplete';
import { OpenMobileMenu } from './UI/UI_functions';

import {
  header,
  mainBody,
  mobileMenu,
} from './UI/body';

import './UI/style.css';

const contentDiv = document.querySelector('.content');

function renderScreen() {
  contentDiv.appendChild(header);
  contentDiv.appendChild(mobileMenu);
  contentDiv.appendChild(mainBody);
}

document.addEventListener('DOMContentLoaded', () => {
  renderScreen();
  OpenMobileMenu();
  searchAndAutoComplete();
});
