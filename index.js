function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",

    "Monday",

    "Tuesday",

    "Wednesday",

    "Thrusday",

    "Friday",

    "Saturday",
  ];

  let day = days[date.getDay()];
  return `${day}  ${formaHours(timestamp)}`;
}

function formaHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hours}:${minute}`;
}

//2
function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let feelsElement = document.querySelector("#feels");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsElement.innerHTML = Math.round(response.data.main.feels_like);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  let fahrenheitElement = document.querySelector("#fahrenheit");
  fahrenheitElement.innerHTML = Math.round(
    (response.data.main.temp * 9) / 5 + 32
  );
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.list[0];
  console.log(forecast);
  forecastElement.innerHTML = ` <h5 > ${formaHours(forecast.dt * 1000)}</h5>
              <img
              src="http://openweathermap.org/img/wn/${
                forecast.weather[0].icon
              }@2x.png"
                 <p class="card-text">
                     ${Math.round(forecast.main.temp_max)}° /  ${Math.round(
    forecast.main.temp_min
  )} °
                  </p>`;

  forecastElement = document.querySelector("#forecast1");
  forecast = response.data.list[1];
  console.log(forecast);
  forecastElement.innerHTML = ` <h5 > ${formaHours(forecast.dt * 1000)}</h5>
              <img
              src="http://openweathermap.org/img/wn/${
                forecast.weather[0].icon
              }@2x.png"
                 <p class="card-text">
                     ${Math.round(forecast.main.temp_max)}° /  ${Math.round(
    forecast.main.temp_min
  )} °
                  </p>`;

  forecastElement = document.querySelector("#forecast2");
  forecast = response.data.list[2];
  console.log(forecast);
  forecastElement.innerHTML = ` <h5 > ${formaHours(forecast.dt * 1000)}</h5>
              <img
              src="http://openweathermap.org/img/wn/${
                forecast.weather[0].icon
              }@2x.png"
                 <p class="card-text">
                     ${Math.round(forecast.main.temp_max)}° /  ${Math.round(
    forecast.main.temp_min
  )} °
                  </p>`;

  forecastElement = document.querySelector("#forecast3");
  forecast = response.data.list[3];
  console.log(forecast);
  forecastElement.innerHTML = ` <h5 > ${formaHours(forecast.dt * 1000)}</h5>
              <img
              src="http://openweathermap.org/img/wn/${
                forecast.weather[0].icon
              }@2x.png"
                 <p class="card-text">
                     ${Math.round(forecast.main.temp_max)}° /  ${Math.round(
    forecast.main.temp_min
  )} °
                  </p>`;
  forecastElement = document.querySelector("#forecast4");
  forecast = response.data.list[4];
  console.log(forecast);
  forecastElement.innerHTML = ` <h5 > ${formaHours(forecast.dt * 1000)}</h5>
              <img
              src="http://openweathermap.org/img/wn/${
                forecast.weather[0].icon
              }@2x.png"
                 <p class="card-text">
                     ${Math.round(forecast.main.temp_max)}° /  ${Math.round(
    forecast.main.temp_min
  )} °
                  </p>`;
}

function search(city) {
  let apiKey = "b77a5166cc2c236ed02e7fcc7edcd78c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function formatForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  search(city.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", formatForm);

search("Tokyo");
