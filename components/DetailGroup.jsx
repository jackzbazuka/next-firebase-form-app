export default function DetailGroup({ detailField, count }) {
	return (
		<>
			{detailField.map((dataField, idx) => (
				<input
					type="text"
					key={idx}
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					name={`${dataField.name}${count}`}
					placeholder={dataField.placeholder}
				/>
			))}
		</>
	)
}
