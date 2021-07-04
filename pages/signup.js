import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import firebase from '@/firebase/clientApp'

export default function SignUp() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const router = useRouter()

	const handleSignUp = async (e) => {
		e.preventDefault()

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				userCredential.user.updateProfile({
					displayName: name
				})
				const userName = userCredential.user.displayName
				const userId = userCredential.user.uid
				console.log(userCredential)
			})
			.then(() => {
				setName('')
				setEmail('')
				setPassword('')
				router.push('/form')
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorCode)
				console.log(errorMessage)
			})
	}

	return (
		<div className='m-1 p-1 grid place-items-center'>
			<h1 className='mx-1 my-10 p-1 text-4xl'>Signup</h1>
			<form onSubmit={handleSignUp} className='m-1 p-1 w-2/5 flex flex-col justify-around place-items-center'>
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='text' value={name} autoComplete='false' required placeholder='Name' onChange={e => setName(e.target.value)} />
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='email' value={email} autoComplete='false' required placeholder='Email' onChange={e => setEmail(e.target.value)} />
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='password' value={password} autoComplete='false' required placeholder='Password' onChange={e => setPassword(e.target.value)} />
				<input className='m-2 p-2 text-lg text-white bg-blue-700 transition-all hover:bg-blue-800 cursor-pointer w-1/2 outline-none border' type='submit' value='Sign Up' />
			</form>
			<NextLink href='/login'><a className='m-1 p-1 transition-all hover:text-purple-700'>Have an account? Login</a></NextLink>
		</div >
	)
}
