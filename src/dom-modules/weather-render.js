import weatherLocation from '../data-modules/weather-location';
import imagePicker from './image-picker';

const listContainer = document.getElementById('list-container');
const searchField = document.getElementById('location');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temp');
const rainBox = document.getElementById('rain-measure');
const humidityBox = document.getElementById('humidity-measure');
const windBox = document.getElementById('wind-measure');

export default async function renderWeather(location) {
	const weatherData = await weatherLocation(location);
	const imageName = imagePicker(weatherData);
	listContainer.classList.remove('show');

	// Just a trick to somehow avoid long county names to overflow
	// eslint-disable-next-line prefer-destructuring
	const country = weatherData.location.country;
	const countryShort = country.split(' ').slice(0, 2).join(' ');

	console.log(weatherData);
	weatherIcon.src = `./weather/${imageName}.svg`;
	searchField.value = `${weatherData.location.name}, ${countryShort}`;
	temperature.textContent = weatherData.current.temp_c;
	rainBox.textContent = weatherData.current.precip_mm;
	humidityBox.textContent = weatherData.current.humidity;
	windBox.textContent = weatherData.current.wind_kph;
}
