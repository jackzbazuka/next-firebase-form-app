import { useState } from "react"

export default function DescGroup() {

	const [descCounter, setDescCounter] = useState([0])
	const addDescription = () => setDescCounter([...descCounter, descCounter.length])

	return (
		<>
			{descCounter.map((desc, idx) => (
				<input
					type='text'
					key={idx}
					className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full'
					name="desc_0"
					placeholder='Description'
				/>
			))}
			<button onClick={addDescription} className='m-1 p-2 w-1/4 rounded transition-all text-white bg-green-500 hover:bg-green-600'>Add Description</button>
		</>
	)
}
