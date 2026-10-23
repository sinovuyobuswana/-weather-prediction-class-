async function fetchWeather(lat, lon) {
const url = `${API_BASE}?latitude=${lat}&longitude=${lon}` +
`&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m` +
`&daily=temperature_2m_max,temperature_2m_min,weather_code` +
`&timezone=auto&forecast_days=5`;
const response = await fetch(url);
if (!response.ok) throw new Error("Weather data unavailable");
return await response.json();
}