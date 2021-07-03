export default function DetailGroup({ detailField, count }) {
	return (
		<>
			{detailField.map((dataField, index) => {
				let nameField = `${dataField.name}${count}`
				// console.log(count)
				return (
					<input
						type="text"
						key={index}
						className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
						name={nameField}
						placeholder={dataField.placeholder}
					/>
				)
			})}
		</>
	)
}
