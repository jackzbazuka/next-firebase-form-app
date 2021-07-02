import InputGroup from "./InputGroup"

export default function Academics() {

	const acadField = [
		{
			text: "Course - Duration:",
			name: "courseDur",
			placeholder: "May 2019 - May 2024",
		},
		{
			text: "CGPA:",
			name: "cgpa",
			placeholder: "3.11",
		},
		{
			text: "10th Percentage:",
			name: "percent10",
			placeholder: "95.6",
		},
		{
			text: "12th Percentage:",
			name: "percent12",
			placeholder: "85.2",
		},
	]

	return (
		<>
			<h2>ACADEMICS</h2>
			<br />
			<div className="form-group">
				<label htmlFor="course">Course</label>
				<select name="course" id="course" className="form-control" required>
					<option value="mbatech">MBA Tech (CS) </option>
					<option value="btech">BTech (CSBS) </option>
				</select>
			</div>
			{acadField.map((dataField, index) => (
				<InputGroup key={index} field={dataField} />
			))}
			<br />
		</>
	)
}