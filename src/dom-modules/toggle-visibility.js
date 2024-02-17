export default function toggleVisibility() {
	const movingElements = document.querySelectorAll('.animate');
	movingElements.forEach((element) => {
		element.classList.toggle('show');
	});
}
