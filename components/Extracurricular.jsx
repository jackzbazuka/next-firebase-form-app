import InputGroup from "@/components/InputGroup"

export default function Extracurricular() {
	const extraField = [
		{
			text: "Hobbies:",
			name: "hobbies",
			placeholder: "Cycling, Dancing etc.",
		},
		{
			text: "Certificates & Courses (Kindly add complete name of your certifications):",
			name: "certiCourse",
			placeholder:
				"Flutter Development (Coursera), Data Science (Kaggle), etc.",
		},
	]

	return (
		<>
			<h2>EXTRACURRICULAR</h2>
			<br />
			{extraField.map((dataField, index) => (
				<InputGroup key={index} field={dataField} />
			))}
			<br />
		</>
	)
}
