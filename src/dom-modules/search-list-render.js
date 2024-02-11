import searchLocation from '../data-modules/search-location';

export function clearContainer(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

export async function renderSearchList(input) {
	const listContainer = document.getElementById('list-container');
	const locationsArray = await searchLocation(input);
	if (input.length >= 3 && locationsArray.length !== 0) {
		clearContainer(listContainer);
		locationsArray.forEach((element) => {
			const listItem = document.createElement('div');
			listItem.classList.add('list-item');
			listItem.textContent = `${element.name}, ${element.country}`;
			listContainer.appendChild(listItem);
			listContainer.classList.add('show');
		});
	} else listContainer.classList.remove('show');
}
