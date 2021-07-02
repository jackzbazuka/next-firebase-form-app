import { useState, useRef } from 'react'
import axios from 'axios'
import { storage } from '@/firebase/clientApp'

export default function Form() {

	// Form states
	const [name, setName] = useState('')
	const [mobile, setMobile] = useState('')
	const [email, setEmail] = useState('')
	const [course, setCourse] = useState('Btech')
	const [image, setImage] = useState(null)

	// Image upload ref
	const imageRef = useRef(null)

	// Sending data to backend for upload (except image for now)
	const handleSubmit = async (e) => {
		e.preventDefault()

		const imgUpload = storage.ref(`images/${image.name}`).put(image).on('state_changed', null, err => console.log(err)) // upload to storage bucket using client SDK

		const res = await axios({
			method: 'POST',
			url: '/api/firestore',
			data: { name, mobile, email, course }	// need to upload image to storage bucket from backend, use admin SDK for that.
		})

		if (res.status == 201) {
			setName('')
			setMobile('')
			setEmail('')
			setCourse('Btech')
			imageRef.current.value = null
		}
	}

	return (
		<div className='m-1 p-1 grid place-items-center'>
			<h1 className='my-10 p-1 text-5xl'>CV Form App</h1>
			<form onSubmit={handleSubmit} className='m-1 p-1 w-2/5 flex flex-col justify-around place-items-center'>
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='text' value={name} autoComplete='false' required placeholder='Name' onChange={e => setName(e.target.value)} />
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='text' value={mobile} autoComplete='false' required placeholder='Mobile' onChange={e => setMobile(e.target.value)} />
				<input className='m-2 p-2 text-lg w-1/2 outline-none border' type='email' value={email} autoComplete='false' required placeholder='Email' onChange={e => setEmail(e.target.value)} />
				<select className='m-2 p-2 text-lg w-1/2 outline-none border' value={course} autoComplete='false' required onChange={e => setCourse(e.target.value)}>
					<option className='m-1 p-1 text-md outline-none' value='Btech'>Btech</option>
					<option className='m-1 p-1 text-md outline-none' value='MBATech'>MBATech</option>
				</select>
				<div className='m-1 p-1 flex flex-row justify-center place-items-center'>
					<span className='m-1 p-1 text-sm'>Profile picture:</span>
					<input className='m-1 p-1 text-sm w-1/2 outline-none' ref={imageRef} type='file' required onChange={e => setImage(e.target.files[0])} />
				</div>
				<input className='m-2 p-2 text-lg text-white bg-blue-700 hover:bg-blue-800 cursor-pointer w-1/2 outline-none border' type='submit' value='Submit' />
			</form>
		</div>
	)
}
