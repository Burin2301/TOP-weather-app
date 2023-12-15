// IMPORTS
import burgerBtn from '../icons/main-menu.png';

// MOBILE MENU

const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.setAttribute('data-mobile', 'true');
mobileMenu.classList.add('inactive');

const mobileMenuContent = `
<h1 class="mobile-menu-h1" data-mobile="true">Weather App☀🌧</h1>
<h2 class="mobile-menu-user-greeting" data-mobile="true">Hi! <a href=""><span class="span-user-name">User</s</h2>
<ul class="mobile-menu-options" data-mobile="true">
    <li data-mobile="true">Temperature</li>
    <li data-mobile="true">Forecast</li>
    <li data-mobile="true">Marine Weather</li>
    <li data-mobile="true">Historical Weather</li>
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

export function renderTemperature(tempObject) {
  const oldTempSections = document.querySelectorAll('.temperature');
  oldTempSections.forEach((section) => {
    section.remove();
  });
  const tempSection = document.createElement('section');
  tempSection.classList.add('temperature');

  const weatherIconFull = tempObject.conditionIcon;
  const weatherIcon = weatherIconFull.slice(35);

  const tempSectionContent = `
    <h3  class="temp-h3">${tempObject.city}<br>${tempObject.country}</h3>
    <div class="temp-show">
        <div class="temperature-div">
            <span class="temp-span">${tempObject.temperatureC}</span>
            <span class="c-temp">°C</span>
        </div>
        <img src="./dest/weather/64x64/${weatherIcon}" alt="" class="temp-image">
        <span class="temp-status">${tempObject.conditionText}</span>
        <div class="temp-detail-div">
            <span class="temp-detail">Humidity: ${tempObject.humidity}%</span>
            <span class="temp-detail">Wind: ${tempObject.windKph} km/h</span>
        </div>
    </div>
    `;
  tempSection.innerHTML = tempSectionContent;
  mainBody.appendChild(tempSection);
}

export {
  mobileMenu,
  header,
  mainBody,
};

// cdn.weatherapi.com/weather/64x64/night/116.png
