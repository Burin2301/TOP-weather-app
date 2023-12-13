import { currentWeather, searchCity } from './apiFunctions';

async function searchAndAutoComplete() {
  const resultBox = document.querySelector('.search-results');
  const inputBox = document.querySelector('#inputCity');
  const submitBtn = document.querySelector('#submitBtn');

  function selectLi(city) {
    inputBox.value = city.innerHTML;
    resultBox.innerHTML = '';
  }

  document.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      const targetLi = e.target.className;
      const liReceived = document.querySelector(`.${targetLi}`);
      selectLi(liReceived);
    }
  });

  function displayCityOptions(cityArray) {
    try {
      const content = cityArray.map((city) => `<li class="${city.name.replace(/\s+/g, '')}-${city.country.replace(/\s+/g, '')}">${city.name} - ${city.region}, ${city.country}</li>`);
      resultBox.innerHTML = `<ul>${content.join('')}</ul>`;
    } catch (error) {
      console.error(error);
    }
  }

  async function searchCityOptions() {
    const inputValue = inputBox.value;
    const cityArray = await searchCity(inputValue);
    displayCityOptions(cityArray);
    if (!inputValue.length) {
      resultBox.innerHTML = '';
    }
  }

  inputBox.onkeyup = searchCityOptions;

  submitBtn.addEventListener('click', () => {
    currentWeather(inputBox.value);
  });
}

export { searchAndAutoComplete };
