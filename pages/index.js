import { useState, useRef } from "react";
import axios from "axios";
import { storage } from "@/firebase/clientApp";

import PersonalDetails from "@/components/PersonalDetails";
import Academics from "@/components/Academics";
import Skills from "@/components/Skills";
import Extracurricular from "@/components/Extracurricular";
import Project from "@/components/Project";
import Internship from "@/components/Internship";
import Leadership from "@/components/Leadership";

export default function Form() {
	const [image, setImage] = useState(null);

	const imageRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// console.log(e.target.elements);
		const data = new FormData(e.target);

		let student = {
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
			// internship
		};

		// console.log(student);
		// const testImg = data.get("profilepicture");
		// console.log(testImg);
		// if (testImg)
		//   storage
		//     .ref(`images/${image.name}`)
		//     .put(testImg)
		//     .on("state_changed", null, (err) => console.log(err));

		const res = await axios({
			method: "POST",
			url: "/api/firestore",
			data: student,
		});

		// if (res.status == 201) {
		//   imageRef.current.value = null;
		// }
	};

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
				<Internship />
				<Project />
				<Leadership />
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
	);
}
