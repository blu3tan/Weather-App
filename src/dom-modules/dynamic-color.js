// eslint-disable-next-line consistent-return
export default function dynamicColor(data) {
	const temp = data.current.temp_c;
	const isDay = data.current.is_day;
	const condition = data.current.condition.code;
	let mainColor;
	let gradient;
	if (isDay === 1 && condition === 1000) {
		if (temp <= -1) {
			mainColor = '#adbdce';
			gradient = 'linear-gradient(180deg, #adbdce, #dce7f2)';
		} // snow grey

		if (temp >= 0 && temp <= 15) {
			mainColor = '#7bace0';
			gradient = 'linear-gradient(180deg, #7bace0, #c9e1f9)';
		} // light blue
		if (temp >= 16 && temp <= 35) {
			mainColor = '#c6a22b';
			gradient = 'linear-gradient(180deg, #c6a22b, #ffe489)';
		} // yellow
		if (temp >= 36) {
			mainColor = '#e37d33';
			gradient = 'linear-gradient(180deg, #e37d33, #f9cc5c)';
		} // orange
	}
	if (isDay === 1 && condition !== 1000) {
		mainColor = '#757575';
		gradient = 'linear-gradient(180deg, #757575, #cccccc)';
	}
	if (isDay === 0) {
		if (condition === 1000) {
			mainColor = '#224475';
			gradient = 'linear-gradient(180deg, #224475, #4c76b2)';
		} // blue
		else {
			mainColor = '#4e4f60';
			gradient = 'linear-gradient(180deg, #4e4f60, #999bc1)';
		} // dark grey
	}

	return [mainColor, gradient];
}
