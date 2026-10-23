HEAD
async function fetchWeather(lat, lon) {
const url = `${API_BASE}?latitude=${lat}&longitude=${lon}` +
`&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m` +
`&daily=temperature_2m_max,temperature_2m_min,weather_code` +
`&timezone=auto&forecast_days=5`;
const response = await fetch(url);
if (!response.ok) throw new Error("Weather data unavailable");
return await response.json();
}
const API_BASE = "https://api.open-meteo.com/v1/forecast"; 
Create .gitignore;
text 
.DS_Store 
.vscode/ 
Create README.md;
markdown 8dc8c952d636cc2a6f0389cc875d8b603ec6242a
