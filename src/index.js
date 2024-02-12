import { renderSearchList } from './dom-modules/search-list-render';
import timeAndDate from './dom-modules/time-date-section';
import './main.css';

timeAndDate();

(() => {
	document.addEventListener('click', (e) => {
		const listContainer = document.getElementById('list-container');
		const input = document.getElementById('location');
		if (!e.target.matches('.list-item')) listContainer.classList.remove('show');
		if (e.target.matches('.location-input') && input.value !== '')
			listContainer.classList.add('show');
	});
	const searchField = document.querySelector('#location');
	searchField.addEventListener('input', (e) => {
		if (e.target.value !== '') renderSearchList(e.target.value);
	});
})();
