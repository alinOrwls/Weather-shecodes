function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
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
  return `${day} ${hours} : ${minutes}`;
}

//2
function displayWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let feelsElement = document.querySelector("#feels");
  let dateElement = document.querySelector("#date");
  //  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsElement.innerHTML = Math.round(response.data.main.feels_like);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  // iconElement.setAttribute(
  // "src",
  // `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
}

function search(city) {
  let apiKey = "b77a5166cc2c236ed02e7fcc7edcd78c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function formatForm(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  search(city.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", formatForm);

function inFahrenheit() {
  let fahrenheitElement = document.querySelector("#fahrenheit");
  let form = (temperatureElement.innerHTML * 9) / 5 + 32;
  fahrenheitElement.innerHTML = form;
}
let temperatureElement = document.querySelector("#temperature");
inFahrenheit(temperature.innerHTML);

search("Tokyo");
