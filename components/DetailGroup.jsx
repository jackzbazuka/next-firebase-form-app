export default function DetailGroup({ detailField }) {

	return (
		<>
			{detailField.map((dataField, index) => (
				<input type='text' key={index} className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' name={dataField.name} placeholder={dataField.placeholder} />
			))}
		</>
	)
}
