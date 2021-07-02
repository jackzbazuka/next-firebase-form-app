export default function InputGroup({ field }) {

	return (
		<div className="form-group">
			<label htmlFor={field.name}>{field.text}</label>
			<input
				type={field.name}
				name={field.name}
				id={field.name}
				className="form-control"
				placeholder={field.placeholder}
				required
			/>
		</div>
	)
}
