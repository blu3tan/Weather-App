export default async function weatherLocation(location) {
	const query = `https://api.weatherapi.com/v1/current.json?q=${location}&key=fd612807f8c74589b28140554240402`;
	const response = await fetch(query);
	const locationWeather = await response.json();
	return locationWeather;
}
