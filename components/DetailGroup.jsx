export default function DetailGroup({ detailField, count }) {
	return (
		<>
			{detailField.map((dataField, index) => {
				let nameField = `${dataField.name}${count}`
				return (
					<input
						type="text"
						key={index}
						className="m-2 px-3 py-2 w-full rounded"
						name={nameField}
						placeholder={dataField.placeholder}
					/>
				)
			})}
		</>
	)
}
