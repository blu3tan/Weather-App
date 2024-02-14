export default function imagePicker(data) {
	const weatherConditions = [
		{
			icon: 'clear',
			codes: [1000],
		},
	];

	const iconCode = data.current.condition.code;
	const isDay = data.current.is_day;
	const iconName = weatherConditions.find((item) =>
		item.codes.includes(iconCode)
	);
	if (isDay === 0) return `${iconName.icon}-night`;
}
