import { renderSearchList } from './dom-modules/search-list-render';
import timeAndDate from './dom-modules/time-date-section';
import './main.css';

timeAndDate();

(() => {
	const searchField = document.querySelector('#location');
	searchField.addEventListener('input', (e) => {
		renderSearchList(e.target.value);
	});
})();
