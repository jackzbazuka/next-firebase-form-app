import { useState } from "react"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Internship() {

	const [internCounter, setInternCounter] = useState([])

	const addInternship = () => setInternCounter([...internCounter, internCounter.length])

	const internField = [
		{
			placeholder: "Organization Name",
			name: "orgName",
		},
		{
			placeholder: "Intern Role",
			name: "internRole",
		},
		{
			placeholder: "Work Duration",
			name: "internDura",
		},
	]

	return (
		<div className='m-1 p-1 w-full'>

			<h3 className='mx-auto my-5 p-3 select-none w-full text-center text-white bg-red-900'>Internship</h3>

			<div className='m-1 w-full flex flex-col justify-around place-items-center'>
				<h4 className='m-1 p-1 flex-shrink-0'>Internship Details</h4>
				<div className='m-1 p-1 w-full'>
					{internCounter.map((internship, idx) => (
						<div key={idx} className='flex flex-col place-items-center'>
							<p className='m-1 p-1 text-xs select-none italic'>(Incase of multiple description statements, use the button to add description)</p>
							<DetailGroup detailField={internField} />
							<DescGroup />
						</div>
					))}
				</div>
				<button onClick={addInternship} className='mx-auto my-5 p-2 w-1/4 rounded transition-all text-white bg-blue-600 hover:bg-blue-700'>Add Internship</button>
			</div>
		</div>
	)
}
