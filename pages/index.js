import { useState, useRef } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { storage } from "@/firebase/clientApp"

import PersonalDetails from "@/components/PersonalDetails"
import Academics from "@/components/Academics"
import Skills from "@/components/Skills"
import Extracurricular from "@/components/Extracurricular"
import Project from "@/components/Project"
import Internship from "@/components/Internship"
import Leadership from "@/components/Leadership"

export default function Form() {
	const [image, setImage] = useState(null)
	const router = useRouter()
	const imageRef = useRef(null)

	const [leadCount, setLeadCount] = useState([])
	const [projectCount, setProjectCount] = useState([])
	const [internCounter, setInternCounter] = useState([])
	const addLead = () => setLeadCount([...leadCount, leadCount.length])
	const addInternship = () => setInternCounter([...internCounter, internCounter.length])
	const addProject = () => setProjectCount([...projectCount, projectCount.length])

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log("Submitted")
		// console.log(e.target.elements);
		const data = new FormData(e.target)
		console.log(data.getAll("desc"))

		let leadershipArray = leadCount.map((leadership) => {
			const leadershipData = {
				leadName: data.get(`leadName${leadership}`),
				leadRole: data.get(`leadRole${leadership}`),
				leadDur: data.get(`leadDur${leadership}`),
				leadDesc: data.getAll(`leadDesc${leadership}`),
			}
			// console.log(leadershipData)
			return leadershipData
		})
		let internshipArray = internCounter.map((internship) => {
			const internshipData = {
				orgName: data.get(`orgName${internship}`),
				internRole: data.get(`internRole${internship}`),
				internDur: data.get(`internDura${internship}`),
				internDesc: data.getAll(`internDesc${internship}`),
			}
			// console.log(internshipData)
			return internshipData
		})
		let projectArray = projectCount.map((project) => {
			const projectData = {
				projName: data.get(`projName${project}`),
				projTool: data.get(`projTool${project}`),
				projDur: data.get(`projDura${project}`),
				projDesc: data.getAll(`projDesc${project}`),
			}
			// console.log(projectData)
			return projectData
		})
		const student = {
			// personal
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			mobile: data.get("mobile"),
			linkedinurl: data.get("linkedinurl"),
			githuburl: data.get("githuburl"),
			email: data.get("email"),
			address: data.get("address"),
			age: data.get("age"),
			gender: data.get("gender"),
			// academics
			course: data.get("course"),
			admissionYear: data.get("admissionYear"),
			graduationYear: data.get("graduationYear"),
			cgpa: data.get("cgpa"),
			tenPercentile: data.get("tenPercentile"),
			twelvePercentile: data.get("twelvePercentile"),
			// skills
			programmingLanguage: data.get("programmingLanguage"),
			toolsAndTechnologies: data.get("toolsAndTechnologies"),
			coreSkills: data.get("coreSkills"),
			// extracurricular
			hobbies: data.get("hobbies"),
			certNcourse: data.get("certNcourse"),
			// dynamic data arrays
			internshipArray,
			projectArray,
			leadershipArray,
		}

		// console.log(internshipArray, projectArray, leadershipArray)

		const sImg = data.get("profilepicture")

		if (sImg) {
			storage
				.ref(`${student.course}-${student.graduationYear}/${sImg.name}`)
				.put(sImg)
				.on("state_changed", null, (err) => console.log(err))
		}

		const res = await axios({
			method: "POST",
			url: "/api/firestore",
			data: student,
		})

		if (res.status == 201) {
			router.reload()
		}
	}

	return (
		<div className="m-1 p-1 grid place-items-center">
			<h1 className="mx-auto mt-5 mb-1 p-1 select-none text-xl">STME Resume Form</h1>
			<form
				className="mx-auto mt-1 mb-10 p-3 w-8/12 flex flex-col justify-around place-items-center"
				onSubmitCapture={handleSubmit}
			>
				<PersonalDetails />
				<Academics />
				<Skills />
				<Extracurricular />
				<Internship internCounter={internCounter} addInternship={addInternship} />
				<Project projectCount={projectCount} addProject={addProject} />
				<Leadership leadCount={leadCount} addLead={addLead} />
				<div className="m-1 p-1 w-full border-t-2 flex flex-col justify-around place-items-center ">
					<p className="m-1 p-1 text-xs select-none italic">
						(You've checked all the form values and are ready to submit the data)
					</p>
					<button
						type="submit"
						className="mx-auto my-5 p-2 w-1/2 transition-all rounded-xl text-white bg-gray-700 hover:bg-gray-800"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	)
}
