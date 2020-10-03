function formatDate(date) {
  let now = new Date();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let day = now.getDay();

  let days = [
    "Sunday",

    "Monday",

    "Tuesday",

    "Wednesday",

    "Thrusday",

    "Friday",

    "Saturday",
  ];
  return ` ${days[day]}, ${hours}:${min}`;
}

let time = document.querySelector("#real-time");
time.innerHTML = formatDate(time);

//2
function displayWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let feelsElement = document.querySelector("#feels");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsElement.innerHTML = Math.round(response.data.main.feels_like);
}

function search(city) {
  let apiKey = "b77a5166cc2c236ed02e7fcc7edcd78c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function formatForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", formatForm);

// 3

function inFahrenheit() {
  let fahrenheitElement = document.querySelector("#fahrenheit");
  let temperature = Math.round((temperatureElement.innerHTML * 9) / 5 + 32);
  fahrenheitElement.innerHTML = temperature;
}
let temperatureElement = document.querySelector("#temperature");
inFahrenheit();

function getWeatherHere(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  let apiKey = "b77a5166cc2c236ed02e7fcc7edcd78c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let currentLocation = document.querySelector("#current");
currentLocation.addEventListener("click", getWeatherHere);
