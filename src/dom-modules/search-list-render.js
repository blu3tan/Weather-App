import searchLocation from '../data-modules/search-location';
import toggleVisibility from './toggle-visibility';
import renderWeather from './weather-render';

export function clearContainer(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

export async function renderSearchList(input) {
	const searchField = document.getElementById('location');
	const listContainer = document.getElementById('list-container');
	const locationsArray = await searchLocation(input);
	if (input.length >= 3 && locationsArray.length !== 0) {
		clearContainer(listContainer);
		locationsArray.forEach((element) => {
			const listItem = document.createElement('div');
			listItem.classList.add('list-item');
			listItem.textContent = `${element.name}, ${element.country}`;
			listItem.addEventListener('click', () => {
				toggleVisibility(50);
				searchField.blur();
				setTimeout(() => {
					renderWeather(listItem.textContent);
				}, 600);
			});
			listContainer.appendChild(listItem);
			listContainer.classList.add('show');
		});
	} else listContainer.classList.remove('show');
}
