export default function timeAndDate() {
	const day = document.getElementById('day');
	const time = document.getElementById('time');

	const dayName = new Date().toLocaleString('en-us', {
		weekday: 'long',
	});
	day.textContent = dayName;

	setInterval(() => {
		const currentTime = new Date().toTimeString().slice(0, 5);
		time.textContent = currentTime;
	}, 1000);
}
