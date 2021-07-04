import { useState } from "react"

export default function DescGroup({ name, count }) {
	const [descCounter, setDescCounter] = useState([0])
	const addDescription = () => setDescCounter([...descCounter, descCounter.length])

	return (
		<>
			{descCounter.map((desc, idx) => (
				<input type="text" key={idx} className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name={`${name}${count}`} placeholder="Description" />
			))}
			<button type="button" onClick={addDescription} className='m-1 px-3 py-2 rounded-xl select-none transition-all duration-500 border text-black bg-white lg:hover:text-white lg:hover:bg-purple-900'>Add Description</button>
		</>
	)
}
