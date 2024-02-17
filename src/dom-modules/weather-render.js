import weatherLocation from '../data-modules/weather-location';
import dynamicColor from './dynamic-color';
import imagePicker from './image-picker';
import switchUnits from './switch-units';
import toggleVisibility from './toggle-visibility';

const listContainer = document.getElementById('list-container');
const searchField = document.getElementById('location');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temp');
const rainBox = document.getElementById('rain-measure');
const humidityBox = document.getElementById('humidity-measure');
const windBox = document.getElementById('wind-measure');

export default async function renderWeather(location) {
	const root = document.documentElement;
	const weatherText = document.getElementById('description');
	const weatherData = await weatherLocation(location);
	// destructuring the multiple return from the function imagePicker
	// so i can render the icon and use the text
	const [imageName, description] = imagePicker(weatherData);
	const appColor = dynamicColor(weatherData);
	listContainer.classList.remove('show');

	// Just a trick to somehow avoid long country names to overflow
	// eslint-disable-next-line prefer-destructuring
	const country = weatherData.location.country;
	const countryShort = country.split(' ').slice(0, 2).join(' ');
	root.style.setProperty('--color-dynamic', appColor);
	weatherText.textContent = description;

	temperature.addEventListener('click', () => {
		console.log(weatherData);
		switchUnits(weatherData);
	});
	weatherIcon.src = `./weather/${imageName}.svg`;
	searchField.value = `${weatherData.location.name}, ${countryShort}`;
	temperature.textContent = weatherData.current.temp_c;
	rainBox.textContent = weatherData.current.precip_mm;
	humidityBox.textContent = weatherData.current.humidity;
	windBox.textContent = weatherData.current.wind_kph;
	toggleVisibility(1000);
}
