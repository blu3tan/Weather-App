import weatherLocation from '../data-modules/weather-location';

const listContainer = document.getElementById('list-container');
const searchField = document.getElementById('location');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temp');
const rainBox = document.getElementById('rain-measure');
const humidityBox = document.getElementById('humidity-measure');
const windBox = document.getElementById('wind-measure');

export default async function renderWeather(location) {
	const weatherData = await weatherLocation(location);
	console.log(weatherData);
	searchField.value = weatherData.location.name;
	listContainer.classList.remove('show');
}
