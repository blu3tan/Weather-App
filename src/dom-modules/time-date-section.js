// Display the day and the running time on the dedicated section

export default function timeAndDate(fetchedData) {
	const timeData = fetchedData.location.localtime;
	const date = timeData.split(' ')[0];
	const time = timeData.split(' ')[1];
	const dayContainer = document.getElementById('day');
	const timeContainer = document.getElementById('time');

	const dayName = new Date(date).toLocaleString('en-us', {
		weekday: 'long',
	});
	dayContainer.textContent = dayName;
	timeContainer.textContent = time;
}
