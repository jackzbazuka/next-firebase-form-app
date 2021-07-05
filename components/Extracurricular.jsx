import Section from "@/components/Section"
import InputField from "./InputField"

export default function Extracurricular() {
	let extra = {
		hobbies: {
			name: "hobbies",
			placeholder: "Hobbies: Music, Dance, Cycling",
		},
		certificationAndCourse: {
			name: "certificationAndCourse",
			placeholder:
				"Certificates & Courses: Flutter Development (Coursera), Android Development (freeCodeCamp)",
		},
	}
	return (
		<Section name="Extracurricular">
			<p className="mx-auto my-1 p-1 text-xs select-none italic">
				(Please input comma separated values in case of mulitple values)
			</p>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<InputField data={extra.hobbies} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<InputField data={extra.certificationAndCourse} />
			</div>
		</Section>
	)
}
