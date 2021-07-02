import { useState } from "react"
import DetailGroup from "@/components/DetailGroup"
import DescGroup from "@/components/DescGroup"

export default function Project() {

	const projectField = [
		{
			placeholder: "Project Name: Gesture Controlled Robot",
			name: "projName",
		},
		{
			placeholder: "Tools & Tech used: Arduino, Raspberry Pi",
			name: "projTool",
		},
		{
			placeholder: "Project Duration: May 2021 - July 2021",
			name: "projDur",
		},
	]

	const [projectCount, setProjectCount] = useState([0])

	const addProject = () => setProjectCount([...projectCount, projectCount.length])

	return (
		<>
			<h2>PROJECTS</h2>
			<div className="form-group">
				<h1>Project Details:</h1>
				<div className="intern_data">
					{projectCount.map((project, index) => (
						<div key={index}>
							<DetailGroup detailField={projectField} />
							<DescGroup />
							<br />
						</div>
					))}
				</div>
				<button onClick={addProject} className="btn btn-dark btn-sm">
					Add New Project
				</button>
			</div>
			<br />
		</>
	)
}
