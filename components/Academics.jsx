import Section from "@/components/Section"
import InputField from "./InputField"

export default function Academics() {
	const academic = {
		cgpa: { name: "cgpa", placeholder: "CGPA (scale of 4): 3.2", required: true },
		tenPercentile: {
			name: "tenPercentile",
			placeholder: "10th Percentile: 90",
			required: true,
		},
		twelvePercentile: {
			name: "twelvePercentile",
			placeholder: "12th Percentile: 75",
			required: true,
		},
	}
	return (
		<Section name="Academics">
			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none">Course</label>
					<select
						name="course"
						id="course"
						className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					>
						<option value="MBATech">MBATech</option>
						<option value="BTech">BTech</option>
					</select>
				</div>

				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none">Admission Year</label>
					<select
						name="admissionYear"
						id="admissionYear"
						className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
					</select>
				</div>

				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none">Graduation Year</label>
					<select
						name="graduationYear"
						id="graduationYear"
						className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					>
						<option value="2022">2022</option>
						<option value="2023">2023</option>
						<option value="2024">2024</option>
						<option value="2025">2025</option>
					</select>
				</div>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<InputField data={academic.cgpa} />
				<InputField data={academic.tenPercentile} />
				<InputField data={academic.twelvePercentile} />
			</div>
		</Section>
	)
}
