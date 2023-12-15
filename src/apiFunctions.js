import { renderTemperature } from './UI/body';

async function getApiInfo(city, method) {
  const apiKey = '62c43848c224459dbea190601230912';
  const baseUrl = 'http://api.weatherapi.com/v1';
  const cityName = city;
  const apiMethod = method;
  const forecastDays = 3;
  const apiInfo = await fetch(`${baseUrl}${apiMethod}?key=${apiKey}&q=${cityName}&days=${forecastDays},{mode: 'cors'}`);
  const response = await apiInfo.json();
  return response;
}

// function createTime() {
//   const newDate = new Date();
//   const month = newDate.getMonth() + 1;
//   const day = newDate.getDate();
//   const year = newDate.getFullYear();
//   // const formattedDate = `${year}-${month}-${day}`;
//   // console.log(formattedDate);
// }

function showTemperature(response) {
  const tempObject = {
    city: response.location.name,
    region: response.location.region,
    country: response.location.country,
    temperatureF: response.current.temp_f,
    temperatureC: response.current.temp_c,
    feelsLikeF: response.current.feelslike_f,
    feelsLikeC: response.current.feelslike_c,
    latitud: response.location.lat,
    longitude: response.location.lon,
    humidity: response.current.humidity,
    windKph: response.current.wind_kph,
    windMph: response.current.wind_mph,
    conditionText: response.current.condition.text,
    conditionIcon: response.current.condition.icon,
  };
  renderTemperature(tempObject);
  return tempObject;
}

async function searchCity(city) {
  const apiMethod = '/search.json';
  const response = await getApiInfo(city, apiMethod);
  // createTime();
  return response;
}

async function currentWeather(city) {
  const apiMethod = '/current.json';
  const response = await getApiInfo(city, apiMethod);
  showTemperature(response);
}

//---------------------------------------------------------------------------------------------

async function marineWeather(city) {
  const apiMethod = '/marinet.json';
  const response = await getApiInfo(city, apiMethod);
  return (response);
}

async function showForeCast(city) {
  const apiMethod = '/forecast.json';
  // const restrictDate = 'value';
  const response = await getApiInfo(city, apiMethod);
  return (response);
}

async function showHistory(city) {
  const apiMethod = '/history.json';
  // const restrictDate = 'value';
  const response = await getApiInfo(city, apiMethod);
  return (response);
}

export {
  getApiInfo,
  searchCity,
  marineWeather,
  showForeCast,
  showHistory,
  currentWeather,
};
