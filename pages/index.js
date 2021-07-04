import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import firebase from '@/firebase/clientApp'

export default function Signin() {

	const [sUser, setSUser] = useState(null)

	const provider = new firebase.auth.GoogleAuthProvider()

	const router = useRouter()

	useEffect(() => {
		console.log(sUser)
	})

	const handleSignin = async (e) => {
		e.preventDefault()

		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				const credential = result.credential

				// This gives you a Google Access Token. You can use it to access the Google API.
				const token = credential.accessToken
				// The signed-in user info.
				const user = result.user
				setSUser(user)
				router.push('/form')
				// ...
			}).catch((error) => {
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
		<div className='w-full grid place-items-center'>
			<header className="px-auto w-full bg-gray-900 text-white">
				<nav className="w-full py-10 md:py-8 flex flex-row justify-center place-items-center">
					<img
						className="p-1 mx-2 md:mx-5 my-1 h-14 md:h-12 bg-white select-none"
						src="/logo.png"
						alt="Logo of NMIMS"
					/>
					<h1 className="p-1 mx-2 md:mx-5 my-1 text-xl select-none">NMIMS - School of Technology Management & Engineering</h1>
				</nav>
			</header>
			<div className='mx-auto mt-32 p-5 w-1/2 border grid place-items-center rounded-lg'>
				<h1 className='mx-auto my-5 text-3xl'>Guidelines</h1>
				<ul className='m-1 p-1 list-inside list-disc'>
					<li className='m-1 p-1'>This form data will be used to generate your CV, so please fill it responsibly.</li>
					<li className='m-1 p-1'>and so on...</li>
				</ul>
				<button onClick={handleSignin} className='mx-auto my-5 p-3 bg-left rounded-md transition-all duration-500 text-white bg-blue-600 lg:hover:bg-blue-700'>Sign in with Google</button>
			</div>
		</div >
	)
}
