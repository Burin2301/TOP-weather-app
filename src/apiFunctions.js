async function getApiInfo(city, method) {
  const apiKey = '62c43848c224459dbea190601230912';
  const baseUrl = 'http://api.weatherapi.com/v1';
  const cityName = city;
  const apiMethod = method;
  const forecastDays = 3;
  const apiInfo = await fetch(`${baseUrl}${apiMethod}?key=${apiKey}&q=${cityName}&days=${forecastDays}`);
  const response = await apiInfo.json();
  return response;
}

async function searchCity(city) {
  const apiMethod = '/search.json';
  const response = await getApiInfo(city, apiMethod);
  console.log(response);
}

async function marineWeather(city) {
  const apiMethod = '/current.json';
  const response = await getApiInfo(city, apiMethod);
  console.log(response);
}

async function showForeCast(city) {
  const apiMethod = '/forecast.json';
  const response = await getApiInfo(city, apiMethod);
  console.log(response);
}

async function showHistory(city) {
  const apiMethod = '/history.json';
  const response = await getApiInfo(city, apiMethod);
  console.log(response);
}

export {
  getApiInfo,
  searchCity,
  marineWeather,
  showForeCast,
  showHistory,
};
