import Section from "@/components/Section"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"
import DatePicker from "@/components/DatePicker"

export default function Leadership({ leadCount, addLead, removeLead }) {
	const leadField = [
		{
			placeholder: "Organization Name: Student Council, NMIMS",
			name: "leadName",
		},
		{
			placeholder: "Role: President",
			name: "leadRole",
		},
	]

	return (
		<Section name="Leadership">
			<div className="mx-auto my-1 w-full flex flex-col justify-around place-items-center">
				<div className="mx-auto my-1 p-1 w-full">
					{leadCount.length > 0 && (
						<p className="mx-auto my-1 p-1 text-xs select-none italic">
							(Incase of multiple description statements, use the button to add
							description)
						</p>
					)}
					{leadCount.map((lead, idx) => (
						<div key={idx} className="flex flex-col place-items-center">
							<h6 className="mx-auto my-1 h-8 w-8 select-none flex items-center justify-center rounded-full text-white bg-blue-900">
								{idx + 1}
							</h6>
							<DetailGroup detailField={leadField} count={lead} />
							<DatePicker field="leadDura" count={lead} />
							<DescGroup name="leadDesc" count={lead} />
						</div>
					))}
				</div>
				<div className="mx-auto my-1 w-full flex flex-row justify-center place-items-center">
					<button
						type="button"
						onClick={addLead}
						className="m-1 px-3 py-2 rounded text-sm select-none transition-all duration-500 border text-black bg-white lg:hover:text-white lg:hover:bg-green-600"
					>
						Add Leadersip
					</button>
					{leadCount.length ? (
						<button
							type="button"
							onClick={removeLead}
							className="m-1 px-3 py-2 rounded text-sm select-none transition-all duration-500 border text-black bg-white lg:hover:text-white lg:hover:bg-red-700"
						>
							Remove Leadership
						</button>
					) : null}
				</div>
			</div>
		</Section>
	)
}
