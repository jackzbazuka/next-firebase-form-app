import Section from "@/components/Section"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"
import DatePicker from "@/components/DatePicker"

export default function Internship({ internCounter, addInternship, removeInternship }) {
	const internField = [
		{
			placeholder: "Organization Name",
			name: "orgName",
		},
		{
			placeholder: "Intern Role",
			name: "internRole",
		},
	]

	return (
		<Section name="Internship">
			<div className="mx-auto my-1 w-full flex flex-col justify-around place-items-center">
				<div className="mx-auto my-1 p-1 w-full">
					{internCounter.length > 0 && (
						<p className="mx-auto my-1 p-1 text-xs select-none italic">
							(Incase of multiple description statements, use the button to add
							description)
						</p>
					)}
					{internCounter.map((internship, idx) => (
						<div key={idx} className="flex flex-col place-items-center">
							<h6 className="mx-auto my-1 h-8 w-8 select-none flex items-center justify-center rounded-full text-white bg-blue-900">
								{idx + 1}
							</h6>
							<DetailGroup detailField={internField} count={internship} />
							<DatePicker field="internDura" count={internship} />
							<DescGroup name="internDesc" count={internship} />
						</div>
					))}
				</div>
				<div className="mx-auto my-1 w-full flex flex-row justify-center place-items-center">
					<button
						type="button"
						onClick={addInternship}
						className="m-1 px-3 py-2 rounded-xl select-none transition-all duration-500 border text-black bg-white lg:hover:text-white lg:hover:bg-purple-900"
					>
						Add Leadersip
					</button>
					{internCounter.length ? (
						<button
							type="button"
							onClick={removeInternship}
							className="m-1 px-3 py-2 rounded-xl select-none transition-all duration-500 border text-black bg-white lg:hover:text-white lg:hover:bg-red-900"
						>
							Remove Previous Internship
						</button>
					) : null}
				</div>
			</div>
		</Section>
	)
}
