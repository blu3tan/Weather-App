import weatherLocation from '../data-modules/weather-location';
import dynamicColor from './dynamic-color';
import imagePicker from './image-picker';
import switchUnits from './switch-units';
import timeAndDate from './time-date-section';
import toggleVisibility from './toggle-visibility';

const listContainer = document.getElementById('list-container');
const searchField = document.getElementById('location');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temp');
const rainBox = document.getElementById('rain-measure');
const humidityBox = document.getElementById('humidity-measure');
const windBox = document.getElementById('wind-measure');

let externalData;
temperature.addEventListener('click', () => {
	switchUnits(externalData);
});

export default async function renderWeather(location) {
	const root = document.documentElement;
	const weatherText = document.getElementById('description');
	const weatherData = await weatherLocation(location);
	externalData = weatherData;
	// destructuring the multiple return from the functions imagePicker
	// and dynamicColor
	const [imageName, description] = imagePicker(weatherData);
	const [appColor, backGradient] = dynamicColor(weatherData);
	listContainer.classList.remove('show');
	// Just a trick to somehow avoid long country names to overflow
	// eslint-disable-next-line prefer-destructuring
	const country = weatherData.location.country;
	const countryShort = country.split(' ').slice(0, 2).join(' ');
	root.style.setProperty('--gradient-dynamic', backGradient);
	root.style.setProperty('--color-dynamic', appColor);
	weatherText.textContent = description;

	timeAndDate(weatherData);
	weatherIcon.src = `./weather/${imageName}.svg`;
	temperature.textContent = weatherData.current.temp_c;
	rainBox.textContent = weatherData.current.precip_mm;
	humidityBox.textContent = weatherData.current.humidity;
	windBox.textContent = weatherData.current.wind_kph;
	toggleVisibility(1000);
	searchField.value = `${weatherData.location.name}, ${countryShort}`;
}
