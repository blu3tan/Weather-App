import { renderSearchList } from './dom-modules/search-list-render';
import renderWeather from './dom-modules/weather-render';
import './main.css';

require.context('./weather', false, /\.svg$/);

(() => {
	document.addEventListener('click', (e) => {
		const listContainer = document.getElementById('list-container');
		if (!e.target.matches('.list-item')) listContainer.classList.remove('show');
	});
	const searchField = document.querySelector('#location');
	searchField.addEventListener('input', (e) => {
		if (e.target.value !== '') renderSearchList(e.target.value);
	});

	const shadeLayer = document.getElementById('shade');
	setTimeout(() => {
		shadeLayer.classList.add('hide');
	}, 1000);
	renderWeather('rome italy');
})();
