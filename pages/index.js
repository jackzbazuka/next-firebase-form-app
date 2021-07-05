import { useState } from "react"
import { useRouter } from "next/router"
import firebase from "@/firebase/clientApp"

export default function Signin() {
	const [sUser, setSUser] = useState(null)
	const [guidelines, setGuidlines] = useState([
		"Please use your NMIMS email id throughout the form.",
		"Fill the form responsibly as this will auto-generate your CV once the form closes.",
		// "Limits are set so kindly phrase the descriptions accordingly",
		"Please follow proper sentence case and avoid unnecessary capitalizations and hyphens(-). Insert space after commas.",
		"Kindly limit your Internship, Projects and Leadership roles to max. 6-8 fields (in total) so that the CV doesn't exceed 1 page.",
		"Space out your description into 2-3 lines, and keep it as minimal as possible for each line, try to avoid long paragraphs.",
		"In the description field, do not write more than 100 words for each Internship/ Project",
		"Kindly upload your picture in formals (preferred)",
		"If a field is to be kept blank please do not add it, use the remove buttons",
		"In case of any confusions/queries, please contact the placecomm team mentioned below",
	])

	const provider = new firebase.auth.GoogleAuthProvider()

	const router = useRouter()

	const handleSignin = async (e) => {
		e.preventDefault()

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				const credential = result.credential

				// This gives you a Google Access Token. You can use it to access the Google API.
				const token = credential.accessToken
				// The signed-in user info.
				const user = result.user
				setSUser(user)
				router.push("/form")
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.email
				// The firebase.auth.AuthCredential type that was used.
				const credential = error.credential
				console.log(errorCode)
				console.log(errorMessage)
				console.log(email)
				console.log(credential)
			})
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
			<div className="mx-auto mt-16 p-3 w-1/2 border grid place-items-center rounded-lg">
				<h1 className="mx-auto my-3 text-3xl">Guidelines</h1>
				<ul className="m-1 p-1 list-inside list-disc">
					{guidelines.map((guide, idx) => (
						<li key={idx} className="m-1 p-1">
							{guide}
						</li>
					))}
				</ul>
				<button
					onClick={handleSignin}
					className="mx-auto my-5 px-3 py-2 bg-left rounded-md transition-all duration-500 text-white bg-blue-600 lg:hover:bg-blue-700"
				>
					Sign in with NMIMS ID
				</button>
			</div>
		</div>
	)
}
