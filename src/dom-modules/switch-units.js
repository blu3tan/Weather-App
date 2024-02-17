const temperature = document.getElementById('temp');
const rainBox = document.getElementById('rain-measure');
const humidityBox = document.getElementById('humidity-measure');
const windBox = document.getElementById('wind-measure');
let switchStatus = 'c';

export function switchToMetric(data) {
	temperature.textContent = data.current.temp_c;
	temperature.classList.toggle('imperial');
	rainBox.textContent = data.current.precip_mm;
	rainBox.classList.toggle('imperial');
	humidityBox.textContent = data.current.humidity;
	windBox.textContent = data.current.wind_kph;
	windBox.classList.toggle('imperial');
}

export function switchToImperial(data) {
	temperature.textContent = data.current.temp_f;
	temperature.classList.toggle('imperial');
	rainBox.textContent = data.current.precip_in;
	rainBox.classList.toggle('imperial');
	humidityBox.textContent = data.current.humidity;
	windBox.textContent = data.current.wind_mph;
	windBox.classList.toggle('imperial');
}
export default function switchUnits(data) {
	if (switchStatus === 'c') {
		switchToImperial(data);
		switchStatus = 'f';
	} else {
		switchToMetric(data);
		switchStatus = 'c';
	}
}
