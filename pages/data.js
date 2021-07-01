import { useState } from 'react'
import admin from '@/firebase/adminApp'

export default function Data({ peeps }) {

	const [students, setStudents] = useState(peeps)

	return (
		<div className='m-1 p-1 grid place-items-center'>
			<table className='m-1 p-1 w-3/5 border text-center'>
				<thead>
					<tr>
						<th className='px-5 py-3'>Name</th>
						<th className='px-5 py-3'>Mobile</th>
						<th className='px-5 py-3'>Email</th>
						<th className='px-5 py-3'>Course</th>
					</tr>
				</thead>
				<tbody>
					{
						students.map(student => (
							<tr key={student.name}>
								<td className='px-5 py-3'>{student.name}</td>
								<td className='px-5 py-3'>{student.mobile}</td>
								<td className='px-5 py-3'>{student.email}</td>
								<td className='px-5 py-3'>{student.course}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

export async function getServerSideProps() {	// SSR

	const db = admin.firestore().collection('students')

	let peeps = []

	await db.get().then(collection => {
		collection.forEach(doc => {
			let temp = doc.data()
			peeps.push({
				name: temp.name,
				mobile: temp.mobile,
				email: temp.email,
				course: temp.course
			})
		})
	})

	return {
		props: {
			peeps
		}
	}
}