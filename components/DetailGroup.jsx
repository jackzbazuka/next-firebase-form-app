export default function DetailGroup({ detailField }) {

	return (
		<>
			{detailField.map((dataField, index) => (
				<input
					key={index}
					className="form-control"
					name={dataField.name}
					placeholder={dataField.placeholder}
					style={{ marginTop: "8px" }}
				/>
			))}
		</>
	)
}
