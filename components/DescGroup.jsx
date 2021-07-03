import { useState } from "react"

export default function DescGroup({ name, count }) {
	const [descCounter, setDescCounter] = useState([0])
	const addDescription = () => setDescCounter([...descCounter, descCounter.length])

	return (
		<>
			{descCounter.map((desc, idx) => {
				let nameField = `${name}${count}`
				return (
					<input
						type="text"
						key={idx}
						className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
						name={nameField}
						placeholder="Description"
					/>
				)
			})}
			<button
				type="button"
				onClick={addDescription}
				className='m-1 p-2 w-1/4 rounded-xl transition-all border text-black bg-white lg:hover:text-white lg:hover:bg-purple-900'
			>
				Add Description
			</button>
		</>
	)
}
