import { useState } from "react"
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

	const router = useRouter()

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
				leadDur: `${data.get(`leadDuraStart${leadership}`)} - ${data.get(`leadDuraEnd${leadership}`)}`,
				leadDesc: data.getAll(`leadDesc${leadership}`),
			}
			// console.log('leadership data -->', leadershipData)
			return leadershipData
		})

		let internshipArray = internCounter.map((internship) => {
			const internshipData = {
				orgName: data.get(`orgName${internship}`),
				internRole: data.get(`internRole${internship}`),
				internDur: `${data.get(`internDuraStart${internship}`)} - ${data.get(`internDuraEnd${internship}`)}`,
				internDesc: data.getAll(`internDesc${internship}`),
			}
			// console.log('internship data -->', internshipData)
			return internshipData
		})

		let projectArray = projectCount.map((project) => {
			const projectData = {
				projName: data.get(`projName${project}`),
				projTool: data.get(`projTool${project}`),
				projDur: `${data.get(`projDuraStart${project}`)} - ${data.get(`projDuraEnd${project}`)}`,
				projDesc: data.getAll(`projDesc${project}`),
			}
			// console.log('project data -->', projectData)
			return projectData
		})

		const student = {
			// personal
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			sapId: data.get("sapId"),
			keywords: data.get("keywords"),
			email: data.get("email"),
			mobile: data.get("mobile"),
			linkedinUrl: data.get("linkedinUrl"),
			githubUrl: data.get("githubUrl"),
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
			certificationAndCourse: data.get("certificationAndCourse"),
			// dynamic data arrays
			internshipArray,
			projectArray,
			leadershipArray,
		}

		// console.log(internshipArray, projectArray, leadershipArray)

		const sImg = data.get("profilePicture")

		if (sImg) {
			storage
				.ref(`${student.course}-${student.graduationYear}/${student.sapId}`)
				.put(sImg)
				.on("state_changed", null, (err) => console.log(err))
		}

		const res = await axios({
			method: "POST",
			url: "/api/firestore",
			data: student,
		})

		if (res.status == 201) {
			// router.reload()
		}
	}

	return (
		<div className='w-full grid place-items-center'>
			<header className='px-auto w-full bg-gray-900 text-white'>
				<nav className='w-full py-10 md:py-8 flex flex-row justify-center place-items-center'>
					<img className='p-1 mx-2 md:mx-5 my-1 h-14 md:h-12 bg-white' src='/logo.png' alt='Logo of NMIMS' />
					<h1 className='p-1 mx-2 md:mx-5 my-1 text-xl select-none'>NMIMS - School of Technology Management & Engineering</h1>
				</nav>
			</header>
			<h1 className="mx-auto mt-10 mb-1 p-1 select-none text-2xl md:text-xl">STME Resume Form</h1>
			<form className="mx-auto mt-1 mb-10 p-3 w-11/12 md:w-8/12 flex flex-col justify-around place-items-center" onSubmitCapture={handleSubmit}>
				<PersonalDetails />
				<Academics />
				<Skills />
				<Extracurricular />
				<Internship internCounter={internCounter} addInternship={addInternship} />
				<Project projectCount={projectCount} addProject={addProject} />
				<Leadership leadCount={leadCount} addLead={addLead} />
				<div className="m-1 p-1 w-full border-t-2 flex flex-col justify-around place-items-center ">
					<p className="m-1 p-1 text-xs select-none italic">(You've checked all the form values and are ready to submit the data)</p>
					<button type="submit" className="mx-auto my-5 p-2 w-1/5 transition-all duration-500 lg:hover:rounded-3xl text-white bg-gray-700 lg:hover:bg-gray-800">
						Submit
					</button>
				</div>
			</form>
			<footer className='px-auto py-16 w-full grid place-items-center select-none text-white bg-gray-900'>
				<h4 className='mx-auto my-5 py-2 w-1/4 text-center border rounded border-purple-700'>MADE BY</h4>
				<div className='mx-auto my-5 p-1 w-full flex flex-row justify-center divide-x'>
					<p className='px-3 py-1 text-center'>Milind Sathe</p>
					<p className='px-3 py-1 text-center'>Shivanshu Singh</p>
					<p className='px-3 py-1 text-center'>Ritish Mohapatra</p>
					<p className='px-3 py-1 text-center'>Darrsheni Sapovadia</p>
					<p className='px-3 py-1 text-center'>Rupali Vastani</p>
					<p className='px-3 py-1 text-center'>Rushali Vastani</p>
					<p className='px-3 py-1 text-center'>Manthan Tripathi</p>
				</div>
			</footer>
		</div>
	)
}
