export default function imagePicker(data) {
	const weatherConditions = [
		{
			icon: 'clear',
			codes: [1000],
		},
		{
			icon: 'cloudy',
			codes: [1003, 1006],
		},
		{
			icon: 'overcast',
			codes: [1009],
		},
		{
			icon: 'mist',
			codes: [1030],
		},
		{
			icon: 'rain',
			codes: [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243],
		},
		{
			icon: 'snow',
			codes: [1066, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258],
		},
		{
			icon: 'sleet',
			codes: [1069, 1204, 1207, 1249, 1252],
		},
		{
			icon: 'drizzle',
			codes: [1272, 1150, 1153, 1168, 1171],
		},
		{
			icon: 'thunder',
			codes: [1087, 1246, 1273, 1276, 1279, 1282],
		},
		{
			icon: 'snow-wind',
			codes: [1114, 1117],
		},
		{
			icon: 'fog',
			codes: [1135, 1147],
		},
		{
			icon: 'snow-rain',
			codes: [1198, 1201],
		},
		{
			icon: 'hail',
			codes: [1237, 1261, 1264],
		},
	];

	const iconCode = data.current.condition.code;
	const isDay = data.current.is_day;
	const iconName = weatherConditions.find((item) =>
		item.codes.includes(iconCode)
	);
	if (isDay === 0) return `${iconName.icon}-night`;
	return `${iconName.icon}-day`;
}
