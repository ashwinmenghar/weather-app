const api = "8ea657d514ad15fd1c49af2a4b463a26";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${api}`);
  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Winds") {
      weatherIcon.src = "images/wind.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Humidity") {
      weatherIcon.src = "images/humidity.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    }

    error.style.display = "none";
    weather.style.display = "block";
  }
}

searchBtn.addEventListener('click', () => {
    clickFunction();
});

searchBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    clickFunction();
  }
});


const clickFunction = () => {
    const val = searchBox.value;
    if (val == "") {
        searchBox.value = "nagpur";
    }
    checkWeather(searchBox.value);
}
checkWeather("nagpur");

