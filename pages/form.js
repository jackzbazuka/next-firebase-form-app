import { useState, useRef } from "react"
import axios from "axios"
import { storage } from "@/firebase/clientApp"

import NavBar from "@/components/NavBar"
import PersonalDetails from "@/components/PersonalDetails"
import Academics from "@/components/Academics"
import Skills from "@/components/Skills"
import Extracurricular from "@/components/Extracurricular"
import Project from "@/components/Project"
import Internship from "@/components/Internship"
import Leadership from "@/components/Leadership"
import FormFooter from "@/components/FormFooter"

export default function Form() {

	const [name, setName] = useState("")
	const [mobile, setMobile] = useState("")
	const [email, setEmail] = useState("")
	const [course, setCourse] = useState("Btech")
	const [image, setImage] = useState(null)

	const imageRef = useRef(null)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const imgUpload = storage
			.ref(`images/${image.name}`)
			.put(image)
			.on("state_changed", null, (err) => console.log(err))

		const res = await axios({
			method: "POST",
			url: "/api/firestore",
			data: { name, mobile, email, course },
		})


		if (res.status == 201) {
			setName("");
			setMobile("");
			setEmail("");
			setCourse("Btech");
			imageRef.current.value = null
		}
	}

	return (
		<>
			<NavBar />
			<div className="main-form needs-validation" noValidate>
				<PersonalDetails />
				<Academics />
				<Skills />
				<Extracurricular />
				<Internship />
				<Project />
				<Leadership />
				<button type="submit" className="text-center btn btn-dark ">
					Submit
				</button>
				<br />
			</div>
			<FormFooter />
		</>
	)
}
