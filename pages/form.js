import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { storage } from "@/firebase/clientApp"
import firebase from "@/firebase/clientApp"

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
	let dynamicCount = leadCount.length + projectCount.length + internCounter.length
	// console.log(dynamicCount)
	// console.log(leadCount.length + projectCount.length + internCounter.length)
	const [sUser, setSUser] = useState(null)
	const [hasData, setHasData] = useState(false)
	const addLead = () => {
		if (dynamicCount < 8) {
			setLeadCount([...leadCount, leadCount.length])
		} else console.log("You've reached recommended limit of dynamic fields")
	}
	const addInternship = () => {
		if (dynamicCount < 8) {
			setInternCounter([...internCounter, internCounter.length])
		} else console.log("You've reached recommended limit of dynamic fields")
	}
	const addProject = () => {
		if (dynamicCount < 8) {
			setProjectCount([...projectCount, projectCount.length])
		} else console.log("You've reached recommended limit of dynamic fields")
	}

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user && user.email.split("@")[1] === "nmims.edu.in") {
				// console.log(user.email.split("@")[1])
				setSUser(user)
				// const res = await axios({
				// 	method: "GET",
				// 	url: "/api/test",
				// 	data: user.uid,
				// })
				console.log(user.uid, "Is logged in")
			} else if (user && user.email.split("@")[1] !== "nmims.edu.in") {
				console.log("Please sign in with NMIMS ID")
				handleSignOut()
			} else {
				console.log("Is logged out")
				router.push("/")
			}
		})
	}, [])

	const removeLead = () => {
		let lead = [...leadCount]
		lead.pop()
		setLeadCount(lead)
	}
	const removeInternship = () => {
		let intern = [...internCounter]
		intern.pop()
		setInternCounter(intern)
	}
	const removeProject = () => {
		let projectCount = [...projectCount]
		projectCount.pop()
		setProjectCount(projectCount)
	}

	const dateFormatter = (date) => {
		let months = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		]
		let dateArray = date.split("-")
		let monthYear = `${months[dateArray[1] - 1]} ${dateArray[0]}`
		return monthYear
	}

	const handleDownload = async (e) => {
		e.preventDefault()
	}

	const handleSignOut = async (e) => {
		// e.preventDefault()

		firebase
			.auth()
			.signOut()
			.then(() => {
				router.push("/")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log("Submitted")
		// console.log(e.target.elements);
		const data = new FormData(e.target)
		//console.log(data.getAll("desc"))

		let leadershipArray = leadCount.map((leadership) => {
			const leadershipData = {
				leadName: data.get(`leadName${leadership}`),
				leadRole: data.get(`leadRole${leadership}`),
				leadDur: `${dateFormatter(
					data.get(`leadDuraStart${leadership}`)
				)} - ${dateFormatter(data.get(`leadDuraEnd${leadership}`))}`,
				leadDesc: data.getAll(`leadDesc${leadership}`),
			}
			// console.log('leadership data -->', leadershipData)
			return leadershipData
		})

		let internshipArray = internCounter.map((internship) => {
			const internshipData = {
				orgName: data.get(`orgName${internship}`),
				internRole: data.get(`internRole${internship}`),
				internDur: `${dateFormatter(
					data.get(`internDuraStart${internship}`)
				)} - ${dateFormatter(data.get(`internDuraEnd${internship}`))}`,
				internDesc: data.getAll(`internDesc${internship}`),
			}
			// console.log('internship data -->', internshipData)
			return internshipData
		})

		let projectArray = projectCount.map((project) => {
			const projectData = {
				projName: data.get(`projName${project}`),
				projTool: data.get(`projTool${project}`),
				projDur: `${dateFormatter(data.get(`projDuraStart${project}`))} - ${dateFormatter(
					data.get(`projDuraEnd${project}`)
				)}`,
				projDesc: data.getAll(`projDesc${project}`),
			}
			// console.log('project data -->', projectData)
			return projectData
		})
		// console.log(dateFormatter("2017-9-22"))
		// console.log(leadershipArray)
		const student = {
			// uid
			uid: sUser.uid,
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
		// console.log(student)
		// console.log(internshipArray, projectArray, leadershipArray)
		const sImg = data.get("profilePicture")

		if (sImg) {
			storage
				.ref(`${student.course}-${student.graduationYear}/${student.sapId}`)
				.put(sImg)
				.on("state_changed", null, (err) => console.log(err))
		}

		// const res = await axios({
		// 	method: "POST",
		// 	url: "/api/test",
		// 	data: {
		// 		uid: sUser.uid,
		// 		name: sUser.displayName,
		// 		email: sUser.email,
		// 		sapId: student.sapId,
		// 	},
		// })

		const res = await axios({
			method: "POST",
			url: "/api/test",
			data: student,
		})

		// if (res.status == 201) {
		// 	router.reload()
		// }
	}

	return (
		<div className="w-full grid place-items-center">
			<header className="px-auto w-full bg-gray-900 text-white">
				<nav className="w-full py-10 md:py-8 flex flex-row justify-center place-items-center">
					<img
						className="p-1 mx-2 md:mx-5 my-1 h-14 md:h-12 bg-white select-none"
						src="/logo.png"
						alt="Logo of NMIMS"
					/>
					<h1 className="p-1 mx-2 md:mx-5 my-1 text-xl select-none">
						NMIMS - School of Technology Management & Engineering
					</h1>
				</nav>
			</header>
			{sUser ? (
				<>
					<div className="p-2 w-full flex flex-row justify-end">
						<p className="m-1 px-3 py-1 rounded select-none border">
							Logged in as {sUser.displayName}
						</p>
						{hasData && (
							<button
								onClick={handleDownload}
								className="m-1 px-3 py-1 rounded select-none transition-all text-white bg-gray-700 lg:hover:bg-gray-800"
							>
								Download data
							</button>
						)}
						<button
							onClick={handleSignOut}
							className="m-1 px-3 py-1 rounded select-none transition-all text-white bg-red-700 lg:hover:bg-red-800"
						>
							Logout
						</button>
					</div>
					<h1 className="mx-auto mt-5 mb-1 p-1 select-none text-2xl md:text-xl">
						STME CV Form
					</h1>
					<form
						className="mx-auto mt-1 mb-10 p-3 w-11/12 md:w-9/12 flex flex-col justify-around place-items-center"
						onSubmitCapture={handleSubmit}
					>
						<PersonalDetails />
						<Academics />
						<Skills />
						<Extracurricular />
						<Internship
							internCounter={internCounter}
							addInternship={addInternship}
							removeInternship={removeInternship}
						/>
						<Project
							projectCount={projectCount}
							addProject={addProject}
							removeProject={removeProject}
						/>
						<Leadership
							leadCount={leadCount}
							addLead={addLead}
							removeLead={removeLead}
						/>
						<div className="m-1 p-1 w-full border-t-2 flex flex-col justify-around place-items-center ">
							<p className="m-1 p-1 text-xs select-none italic">
								(You've checked all the form values and are ready to submit the
								data)
							</p>
							<button
								type="submit"
								className="mx-auto my-5 px-10 py-2 select-none transition-all duration-500 text-white bg-gray-700 lg:hover:rounded-3xl lg:hover:bg-gray-800"
							>
								Submit
							</button>
						</div>
					</form>
					<footer className="px-auto py-16 w-full grid place-items-center select-none text-white bg-gray-900">
						<h4 className="mx-auto my-5 px-5 py-2 text-center border animate-pulse rounded border-purple-700">
							DEVELOPED BY
						</h4>
						<div className="mx-auto my-5 p-1 w-full flex flex-row justify-center divide-x">
							<p className="px-4 py-1 text-center">Shivanshu Singh</p>
							<p className="px-4 py-1 text-center">Milind Sathe</p>
							<p className="px-4 py-1 text-center">Ritish Mohapatra</p>
						</div>
					</footer>
				</>
			) : (
				<span className="m-10 p-10">Not signed in</span>
			)}
		</div>
	)
}
