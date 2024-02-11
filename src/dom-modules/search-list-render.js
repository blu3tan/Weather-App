import searchLocation from '../data-modules/search-location';

function clearContainer(element) {
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

export default async function renderSearchList(input) {
	const locationsArray = await searchLocation(input);
	console.log(locationsArray);
	const listContainer = document.getElementById('list-container');
	clearContainer(listContainer);
	locationsArray.forEach((element) => {
		const listItem = document.createElement('div');
		listItem.classList.add('list-item');
		listItem.textContent = `${element.name}, ${element.country}`;
		listContainer.appendChild(listItem);
	});
}
