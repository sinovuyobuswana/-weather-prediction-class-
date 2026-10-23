<<<<<<< HEAD
function displayCurrentWeather(data, location) {
const c = data.current;
const container = document.getElementById("current-weather");
container.innerHTML = `
<h2>${location.name}, ${location.country}</h2>
<div class="temp">${Math.round(c.temperature_2m)}°C</div>
<p>${getWeatherDescription(c.weather_code)}</p>
<p>Humidity: ${c.relative_humidity_2m}% | Wind: ${c.wind_speed_10m} km/h</p>`;
container.classList.remove("hidden");
}
function getWeatherDescription(code) {
const map = {
0:"Clear",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",
45:"Fog",51:"Drizzle",61:"Rain",63:"Rain",65:"Heavy rain",
71:"Snow",80:"Showers",95:"Thunderstorm"
};
return map[code] || "Unknown";
}
=======
const API_BASE = "https://api.open-meteo.com/v1/forecast"; 
Create .gitignore;
text 
.DS_Store 
.vscode/ 
Create README.md;
markdown
>>>>>>> 03f8c6e3ad76305eb367207e52803fdb59465a4d
