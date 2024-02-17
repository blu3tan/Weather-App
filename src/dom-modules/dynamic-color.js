// eslint-disable-next-line consistent-return
export default function dynamicColor(data) {
	const temp = data.current.temp_c;
	const isDay = data.current.is_day;
	const condition = data.current.condition.code;
	if (isDay === 1) {
		if (condition === 1000) {
			if (temp <= -1) return '#757575'; // grey
			if (temp >= 0 && temp <= 15) return '#7bace0'; // light blue
			if (temp >= 16 && temp <= 35) return '#c6a22b'; // yellow
			return '#e37d33'; // orange
		}
		return '#757575'; // grey
	}
	if (isDay === 0 || condition === 1000) return '#224475'; // blue
	if (isDay === 0 || condition !== 1000) return '#4e4f60'; // dark grey
}
