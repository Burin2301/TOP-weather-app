// IMPORTS
import burgerBtn from '../icons/main-menu.png';

// MOBILE MENU

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.classList.add('inactive');

const mobileMenuContent = `
<h1 class="mobile-menu-h1">Weather App☀🌧</h1>
<h2 class="mobile-menu-user-greeting">Hi! <a href=""><span class="span-user-name">User</s</h2>
<ul class="mobile-menu-options">
    <li>Temperature</li>
    <li>Forecast</li>
    <li>Marine Weather</li>
    <li>Historical Weather</li>
</ul>
`;
mobileMenu.innerHTML = mobileMenuContent;

// HEADER

const header = document.createElement('header');
header.classList.add('header');

const headerContent = `
<h1>Weather App☀🌧</h1>
<ul class="desktop-menu-options">
    <li class="desktop-menu-li">Temperature</li>
    <li class="desktop-menu-li">Forecast</li>
    <li class="desktop-menu-li">Marine Weather</li>
    <li class="desktop-menu-li">Historical Weather</li>
</ul>
<img src="${burgerBtn}" class="burger-menu" alt="">
`;
header.innerHTML = headerContent;

const mainBody = document.createElement('main');

const searchComponent = document.createElement('section');
searchComponent.classList.add('search-component');

const searchBox = document.createElement('div');
searchBox.classList.add('search-div');

const searchboxInput = document.createElement('input');
searchboxInput.classList.add('search-input');
searchboxInput.type = 'text';
searchboxInput.name = 'cityInput';
searchboxInput.id = 'inputCity';
searchboxInput.placeholder = 'Search for a City';

const searchBtn = document.createElement('button');
searchBtn.classList.add('submit-btn');
searchBtn.id = 'submitBtn';
searchBtn.innerText = ' 🔍';

const searchResults = document.createElement('div');
searchResults.classList.add('search-results');

searchComponent.appendChild(searchBox);
searchBox.appendChild(searchboxInput);
searchBox.appendChild(searchBtn);
searchComponent.appendChild(searchResults);
mainBody.appendChild(searchComponent);

// TEMPERATURE SECTION

const tempSection = document.createElement('section');
tempSection.classList.add('temperature');

const tempSectionContent = `
<h3>CITY</h3>
<div class="temp-show">
    <span class="temp-span"> 38c </span>
    <img src="#" alt="">🌧
    <span>text describe clima</span>    
</div>
`;

tempSection.innerHTML = tempSectionContent;

mainBody.appendChild(tempSection);

export {
  mobileMenu,
  header,
  mainBody,
};
