import { useState } from "react"

export default function DescGroup() {

	const [descCounter, setDescCounter] = useState([0])
	const addDescription = () => setDescCounter([...descCounter, descCounter.length])

	return (
		<>
			{descCounter.map((desc, index) => (
				<input
					key={index}
					className="form-control"
					name="desc_0"
					placeholder="Description: Ex. Developed a responsive web-app "
					style={{ marginTop: "8px" }}
				/>
			))}
			<button
				style={{ marginTop: "8px", marginBottom: "8px" }}
				onClick={addDescription}
				className="btn btn-dark btn-sm"
			>
				Add Description
			</button>
		</>
	)
}
