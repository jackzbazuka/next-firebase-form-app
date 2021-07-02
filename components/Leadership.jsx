import { useState } from "react"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Leadership() {

	const [leadCount, setLeadCount] = useState([])

	const addLead = () => setLeadCount([...leadCount, leadCount.length])

	const leadField = [
		{
			placeholder: "Organization Name: Student Council",
			name: "leadName",
		},
		{
			placeholder: "Role: President",
			name: "leadRole",
		},
		{
			placeholder: "Leadership Duration: May 2021 - July 2021",
			name: "leadDur",
		},
	]

	return (
		<div className='m-1 p-1 w-full'>

			<h3 className='mx-auto my-5 p-3 select-none w-full text-center text-white bg-red-900'>Leadership</h3>

			<div className='m-1 w-full flex flex-col justify-around place-items-center'>
				<h4 className='m-1 p-1 flex-shrink-0'>Leadership Details</h4>
				<div className='m-1 p-1 w-full'>
					{leadCount.map((lead, index) => (
						<div key={index} className='flex flex-col place-items-center'>
							<p className='m-1 p-1 text-xs italic'>(Incase of multiple description statements, use the button to add description)</p>
							<DetailGroup detailField={leadField} />
							<DescGroup />
						</div>
					))}
				</div>
				<button onClick={addLead} className='mx-auto my-5 p-2 w-1/4 rounded transition-all text-white bg-blue-600 hover:bg-blue-700'>Add Leadersip</button>
			</div>
		</div>
	)
}
