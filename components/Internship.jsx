import { useState } from "react"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Internship() {
	const internField = [
		{
			placeholder: "Organization Name: TCS",
			name: "internName",
		},
		{
			placeholder: "Intern Role: FullStack Developer",
			name: "internRole",
		},
		{
			placeholder: "Work Duration: May 2021 - July 2021",
			name: "internDur",
		},
	]

	const [internCounter, setInternCounter] = useState([0])

	const addInternship = () => setInternCounter([...internCounter, internCounter.length])

	return (
		<>
			<h2>INTERNSHIPS</h2>
			<div className="form-group">
				<h1>Internship Details:</h1>
				<div className="intern_data">
					{internCounter.map((internship, index) => (
						<div key={index}>
							<DetailGroup detailField={internField} />
							<DescGroup />
							<br />
						</div>
					))}
				</div>
				<button onClick={addInternship} className="btn btn-dark btn-sm">
					Add Internship
				</button>
			</div>
			<br />
		</>
	)
}