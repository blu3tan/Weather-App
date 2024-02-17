export default function toggleVisibility(timer) {
	const movingElements = document.querySelectorAll('.animate');
	setTimeout(() => {
		movingElements.forEach((element) => {
			element.classList.toggle('show');
		});
	}, timer);
}
