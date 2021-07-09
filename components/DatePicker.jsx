export default function DatePicker({ field, count }) {
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	]
	const year = [
		'2017',
		'2018',
		'2019',
		'2020',
		'2021',
		'2022'
	]
	return (
		<div className="mx-auto my-1 w-full flex flex-col md:flex-row justify-around place-items-center">
			<p className="m-1 p-1 text-base select-none">Work Duration: </p>
			<div className="flex flex-col md:flex-row items-center">
				<label className="m2 p-1 select-none text-center">Started</label>
				<select
					name={`${field}StartMonth${count}`}
					className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					required
				>
					{months.map(item => (
						<option key={item}>{item}</option>
					))}
				</select>
				<select
					name={`${field}StartYear${count}`}
					className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					required
				>
					{year.map(item => (
						<option key={item}>{item}</option>
					))}
				</select>
			</div>
			<div className="flex flex-col md:flex-row items-center">
				<label className="m2 p-1 select-none text-center">Finished</label>
				<select
					name={`${field}EndMonth${count}`}
					className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					required
				>
					{months.map(item => (
						<option key={item}>{item}</option>
					))}
				</select>
				<select
					name={`${field}EndYear${count}`}
					className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					required
				>
					{year.map(item => (
						<option key={item}>{item}</option>
					))}
				</select>
			</div>
		</div>
	)
}
