import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import firebase from '@/firebase/clientApp'

export default function Login() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async (e) => {
		e.preventDefault()
	}

	return (
		<div className='m-1 p-1 grid place-items-center'>
			<h1 className='mx-1 my-10 p-1 text-2xl'>Login</h1>
			<form onSubmit={handleLogin} className='m-1 p-1 w-2/5 flex flex-col justify-around place-items-center'>
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='email' value={email} autoComplete='false' required placeholder='Email' onChange={e => setEmail(e.target.value)} />
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='password' value={password} autoComplete='false' required placeholder='Password' onChange={e => setPassword(e.target.value)} />
				<input className='m-2 p-2 text-lg text-white bg-blue-700 transition-all hover:bg-blue-800 cursor-pointer w-1/2 outline-none border' type='submit' value='Login' />
			</form>
			<NextLink href='/'><a className='m-1 p-1 transition-all hover:text-purple-700'>Don't have an account? Sign Up</a></NextLink>
		</div >
	)
}
