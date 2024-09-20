// VARIABLES
const area = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const xrror = document.querySelector(".error");

// API DETAILS
const apiKey = "*********************";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        xrror.style.display = "block";
        weather.style.display = "none"
    } else {
        weather.style.display = "block";
    }

    let data = await response.json();

    // PlACEHOLDER
    area.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "<sup>o</sup>c</h1>";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    // WEATHER ICON
    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.svg"
    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.svg"
    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.svg"
    } 
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.svg"
    } 
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.svg"
    } 

}

// SEARCH FUNCTION
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


checkWeather(city);