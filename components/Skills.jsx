import InputGroup from "./InputGroup"

export default function Skills() {

	const skillField = [
		{
			text: "Programming Languages:",
			name: "lang",
			placeholder: "C++, Python, Java, JavaScript, PHP etc.",
		},
		{
			text: "Tools & Technologies: ",
			name: "tools",
			placeholder: "MERN, MongoDB, Web Development etc.",
		},
		{
			text: "Core Skills:",
			name: "core",
			placeholder: "Communication, Leadership, Conflict Resolution etc.",
		},
	]

	return (
		<>
			<h2>SKILLS</h2>
			<br />
			{skillField.map((dataField, index) => (
				<InputGroup key={index} field={dataField} />
			))}
		</>
	)
}
