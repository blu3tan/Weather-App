export default function imagePicker(data) {
	const weatherConditions = [
		{
			icon: 'clear',
			text: 'Clear sky',
			codes: [1000],
		},
		{
			icon: 'cloudy',
			text: 'Cloudy day',
			codes: [1003, 1006],
		},
		{
			icon: 'overcast',
			text: 'Overcast',
			codes: [1009],
		},
		{
			icon: 'mist',
			text: 'Misty air',
			codes: [1030],
		},
		{
			icon: 'rain',
			text: 'Rainy day',
			codes: [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243],
		},
		{
			icon: 'snow',
			text: 'Snowy day',
			codes: [1066, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258],
		},
		{
			icon: 'sleet',
			text: 'Freezing',
			codes: [1069, 1204, 1207, 1249, 1252],
		},
		{
			icon: 'drizzle',
			text: 'Drizzle',
			codes: [1272, 1150, 1153, 1168, 1171],
		},
		{
			icon: 'thunder',
			text: 'Thunders',
			codes: [1087, 1246, 1273, 1276, 1279, 1282],
		},
		{
			icon: 'snow-wind',
			text: 'Blizzard',
			codes: [1114, 1117],
		},
		{
			icon: 'fog',
			text: 'Foggy day',
			codes: [1135, 1147],
		},
		{
			icon: 'snow-rain',
			text: 'Freezing',
			codes: [1198, 1201],
		},
		{
			icon: 'hail',
			text: 'Hail storm',
			codes: [1237, 1261, 1264],
		},
	];

	const iconCode = data.current.condition.code;
	const isDay = data.current.is_day;
	const iconName = weatherConditions.find((item) =>
		item.codes.includes(iconCode)
	);
	const description = iconName.text;
	let image;
	if (isDay === 0) image = `${iconName.icon}-night`;
	else image = `${iconName.icon}-day`;

	// return the icon and the text description
	return [image, description];
}
