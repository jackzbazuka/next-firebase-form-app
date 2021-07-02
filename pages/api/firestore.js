import admin from "@/firebase/adminApp"
import firebase from 'firebase-admin'

export default async function handler(req, res) {

	const { method, body } = req

	const db = admin.firestore()

	if (method == 'POST') {

		await db.collection(body.course).doc(body.name).set({
			name: body.name,
			mobile: body.mobile,
			email: body.email,
			course: body.course,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		})

		console.log(`${body.name} entered in firestore`)

		res.status(201).json({ message: 'User created succesfully' })

	} else if (method == 'GET') {

		res.status(200).json({ message: 'Data' })


	} else {
		res.status(405).json({ message: 'Method not allowed' })
	}
}