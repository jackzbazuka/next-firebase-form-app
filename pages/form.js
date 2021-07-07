import NextHead from "next/head"
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
	const [sUser, setSUser] = useState(null)
	const [hasData, setHasData] = useState(false)
	const [userData, setUserData] = useState(null)
	let dynamicCount = leadCount.length + projectCount.length + internCounter.length
	// console.log(dynamicCount)
	// console.log(leadCount.length + projectCount.length + internCounter.length)

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user) => {
			if (user) {
				const myUserID = user.uid
				const myForm = await firebase
					.firestore()
					.collectionGroup("students")
					.where("studentID", "==", myUserID)
					.get()
				setSUser(user)
				myForm.forEach((doc) => {
					if (doc.exists) {
						let temp = doc.data()
						delete temp.studentID
						delete temp.createdAt
						setUserData(temp)
						setHasData(true)
					}
				})
			} else {
				router.push("/")
			}
		})
	}, [])

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

	const handleSignOut = async (e) => {
		e.preventDefault()
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

		const data = new FormData(e.target)

		let leadershipArray = leadCount.map((leadership) => {
			const leadershipData = {
				leadName: data.get(`leadName${leadership}`),
				leadRole: data.get(`leadRole${leadership}`),
				leadDur: `${dateFormatter(
					data.get(`leadDuraStart${leadership}`)
				)} - ${dateFormatter(data.get(`leadDuraEnd${leadership}`))}`,
				leadDesc: data.getAll(`leadDesc${leadership}`),
			}
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
			sapID: data.get("sapId"),
			keywords: data.get("keywords"),
			email: sUser.email,
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

		const res = await axios({
			method: "POST",
			url: "/api/firestore",
			data: student,
		})

		if (res.status == 201) {
			if (sImg) {
				storage
					.ref(`${student.course}-${student.graduationYear}/${student.sapId}`)
					.put(sImg)
					.on("state_changed", null, (err) => console.log(err))
			}
			router.reload()
			console.log("User created")
		} else if (res.status == 304) {
			alert("Incorrect SAP ID, document already exists")
			console.log("Document already exists")
		} else {
			router.reload()
		}
	}

	return (
		<div className="w-full grid place-items-center relative min-h-screen">
			<NextHead>
				<title>NMIMS - STME Resume Form</title>
				<link rel="shortcut icon" href="/favicon.ico"></link>
			</NextHead>
			<header className="w-full m-0 p-0 relative top-0">
				<nav className="w-full m-0 px-auto py-10 md:py-11 lg:py-12 flex flex-row justify-center items-center text-white bg-gray-900 select-none">
					<img
						className="mx-3 md:mx-3 lg:mx-3 px-2 md:px-3 lg:px-4 h-10 md:h-11 lg:h-12 bg-white"
						src="/logo.png"
						alt="Logo of NMIMS"
					/>
					<h1 className="mx-1 md:mx-3 lg:mx-3 px-2 md:px-3 lg:px-4 text-sm md:text-lg lg:text-xl text-center">
						NMIMS - School of Technology Management & Engineering
					</h1>
				</nav>
			</header>
			{sUser ? (
				<div className="w-full m-0 p-0 grid place-items-center">
					<div className="w-full m-auto p-2 flex flex-row justify-center md:justify-end">
						<p className="mx-1 my-1 px-1 md:px-3 py-1 rounded select-none text-xs md:text-base border">
							Logged in as {sUser.displayName}
						</p>
						{hasData && (
							<a
								className="mx-1 my-1 px-1 md:px-3 py-1 rounded select-none text-xs md:text-base transition-all text-white bg-gray-700 lg:hover:bg-gray-800"
								href={`data:text/json;charset=utf-8,${encodeURIComponent(
									JSON.stringify(userData, null, 4)
								)}`}
								download={`${userData.sapID}.json`}
							>
								Download data
							</a>
						)}
						<button
							onClick={handleSignOut}
							className="mx-1 my-1 px-1 md:px-3 py-1 rounded select-none text-xs md:text-base transition-all text-white bg-red-700 lg:hover:bg-red-800"
						>
							Logout
						</button>
					</div>
					<h1 className="mx-auto mt-5 mb-1 p-1 select-none text-2xl md:text-xl">
						STME CV Form
					</h1>
					{!hasData ? (
						<form
							className="mx-auto mt-1 mb-10 p-3 w-11/12 md:w-9/12 flex flex-col justify-around place-items-center"
							onSubmitCapture={handleSubmit}
						>
							<PersonalDetails email={sUser.email} />
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
					) : (
						<span className="mx-auto my-36 px-3 py-2 text-base text-center rounded-3xl select-none transition-all text-white border bg-purple-800 lg:hover:text-purple-800 lg:hover:bg-white border-purple-800">
							You've already filled the form
						</span>
					)}
				</div>
			) : (
				<span className="mx-auto my-10 p-10">Not signed in</span>
			)}
			<footer className="w-full py-5 md:py-14 grid place-items-center text-white bg-gray-900 select-none">
				<div className="mx-auto my-3 p-1 flex flex-row justify-center">
					<h4 className="px-3 py-2 text-sm md:text-base lg:text-base text-center border rounded animate-pulse border-purple-700">DEVELOPED BY</h4>
				</div>
				<div className="mx-auto my-5 p-1 flex flex-row justify-center divide-x text-xs md:text-base">
					<p className="px-3 md:px-5 lg:px-7 py-2 text-center">Shivanshu Singh</p>
					<p className="px-4 md:px-5 lg:px-7 py-2 text-center">Milind Sathe</p>
					<p className="px-4 md:px-5 lg:px-7 py-2 text-center">Ritish Mohapatra</p>
				</div>
			</footer>
		</div>
	)
}
