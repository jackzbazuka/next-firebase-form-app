import Section from '@/components/Section'
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Leadership({ leadCount, addLead }) {
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
		<Section name='Leadership'>

			<div className="m-1 w-full flex flex-col justify-around place-items-center">
				<h4 className="m-1 p-1 flex-shrink-0">Leadership Details</h4>
				<div className="m-1 p-1 w-full">
					{leadCount.map((lead, index) => (
						<div key={index} className="flex flex-col place-items-center">
							<p className="m-1 p-1 text-xs select-none italic">
								(Incase of multiple description statements, use the button to add
								description)
							</p>
							<DetailGroup detailField={leadField} count={lead} />
							<DescGroup name="leadDesc" count={lead} />
						</div>
					))}
				</div>
				<button
					type="button"
					onClick={addLead}
					className='m-1 p-2 w-1/4 rounded-xl transition-all border text-black bg-white lg:hover:text-white lg:hover:bg-purple-900'
				>
					Add Leadersip
				</button>
			</div>
		</Section>
	)
}
