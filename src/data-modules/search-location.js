export default async function searchLocation(input) {
	const query = `https://api.weatherapi.com/v1/search.json?q=${input}&key=fd612807f8c74589b28140554240402`;
	const response = await fetch(query);
	const locationList = await response.json();
	return locationList;
}
