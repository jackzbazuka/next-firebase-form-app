import Section from '@/components/Section'
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Internship({ internCounter, addInternship }) {
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
		<Section name='Internship'>
			<div className="m-1 w-full flex flex-col justify-around place-items-center">
				<h4 className="m-1 p-1 flex-shrink-0">Internship Details</h4>
				<div className="m-1 p-1 w-full">
					{internCounter.map((internship, idx) => (
						<div key={idx} className="flex flex-col place-items-center">
							<p className="m-1 p-1 text-xs select-none italic">
								(Incase of multiple description statements, use the button to add
								description)
							</p>
							<DetailGroup detailField={internField} count={internship} />
							<DescGroup name="internDesc" count={internship} />
						</div>
					))}
				</div>
				<button type="button" onClick={addInternship} className='m-1 p-2 w-1/4 rounded-xl transition-all border text-black bg-white lg:hover:text-white lg:hover:bg-purple-900'>Add Internship</button>
			</div>
		</Section>
	)
}
