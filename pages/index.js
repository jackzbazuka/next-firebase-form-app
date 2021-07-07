import NextHead from "next/head"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import firebase from "@/firebase/clientApp"

export default function Signin() {
	const [userWarning, setUserWarning] = useState("")
	const [guidelines, setGuidlines] = useState([
		"Fill the form responsibly as this will auto-generate your CV.",
		"Generated CV will be mailed to you later.",
		"Keywords field is supposed to summarize your profile/skillset/preferences.",
		"Please follow proper sentence case and avoid unnecessary capitalizations and hyphens(-). Insert space after commas.",
		"Kindly limit content of your Internship, Projects and Leadership fields so that the CV doesn't exceed 1 page. You will be contacted to update data if by chance it does.",
		"These sections are capped at 8 inputs in total and 5 description fields for each entry.",
		"Space out your description into 2-3 lines, character limit of 200 has been set on them.",
		"Description length is recommended at 400-500 characters in total.",
		"If uploading your picture, kindly do so in formals. It is an optional field.",
		"It is recommended that you also download your data after form submission.",
		"Incase of queries, contact: Tanmayi or Shivanshu. You can also mail us at: stme.navimumbai.placements@nmims.edu.in",
	])

	useEffect(() => {
		setTimeout(() => {
			setUserWarning("")
		}, 10000)
	}, [userWarning])

	const provider = new firebase.auth.GoogleAuthProvider()
	const router = useRouter()

	const handleSignin = async (e) => {
		e.preventDefault()
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const user = result.user
				if (user.email.split("@")[1] === "nmims.edu.in") {
					router.push("/form")
				} else {
					setUserWarning("Sign in with NMIMS email ID")
					user.delete().then(() => {
						router.reload()
					})
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div className="w-full grid place-items-center min-h-screen">
			<NextHead>
				<title>NMIMS - STME Resume Form</title>
				<link rel="shortcut icon" href="/favicon.ico"></link>
			</NextHead>
			<header className="w-full m-0 p-0">
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
			<div className="mx-auto my-10 md:my-14 lg:my-16 p-3 w-11/12 md:w-9/12 lg:w-1/2 border grid place-items-center rounded-lg">
				<h1 className="mx-auto my-3 text-xl md:text-2xl lg:text-3xl">Guidelines</h1>
				<ul className="m-1 p-1 list-inside list-disc">
					{guidelines.map((guide, idx) => (
						<li key={idx} className="m-1 p-1 text-xs md:text-base lg:text-base">
							{guide}
						</li>
					))}
				</ul>
				<button
					onClick={handleSignin}
					className="mx-auto my-5 px-3 py-2 text-sm md:text-base lg:text-base rounded-md transition-all duration-500 text-white bg-blue-600 lg:hover:bg-blue-700"
				>
					Sign in with NMIMS ID
				</button>
				<span className="mx-auto my-5 px-3 py-2 text-red-600">{userWarning}</span>
			</div>
			<footer className="w-full py-5 md:py-14 grid place-items-center text-white bg-gray-900 select-none">
				<div className="mx-auto my-1 flex flex-row justify-center">
					<h4 className="mx-auto my-5 px-4 py-2 text-sm md:text-base lg:text-base text-center border rounded animate-pulse border-purple-700">
						DEVELOPED BY
					</h4>
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
