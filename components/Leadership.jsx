import { useState } from "react"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Leadership() {

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

	const [leadCount, setLeadCount] = useState([0])

	const addLead = () => setLeadCount([...leadCount, leadCount.length])

	return (
		<>
			<h2>LEADERSHIP</h2>
			<div className="form-group">
				<h1>Leadership Details:</h1>
				<div className="intern_data">
					{leadCount.map((lead, index) => (
						<div key={index}>
							<DetailGroup detailField={leadField} />
							<DescGroup />
							<br />
						</div>
					))}
				</div>
				<button onClick={addLead} className="btn btn-dark btn-sm">
					Add New Leadership Role
				</button>
			</div>
		</>
	)
}
