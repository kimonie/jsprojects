const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const apiKey = "96f22d712646aa871ea2d5fb99dedc26";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lagos&units=metric";

async function checkWeather() {

    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = Math.round(data.main.temp) + "<sup>o</sup>c</h1>";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

}

checkWeather();