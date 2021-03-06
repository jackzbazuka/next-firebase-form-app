import admin from "@/firebase/adminApp"
import firebase from "firebase-admin"

export default async function handler(req, res) {
	const { method, body } = req

	const db = admin.firestore()
	const myForm = await db.collectionGroup('students').where('sapID', '==', body.sapID).get()
	let DOC_EXISTS = false

	if (method == "POST") {
		myForm.forEach(doc => {
			if (doc.exists) {
				DOC_EXISTS = true
			}
		})
		if (!DOC_EXISTS) {
			await db.collection('student').doc(`${body.course}-${body.graduationYear}`).collection('students').doc(body.sapID).set({
				studentID: body.uid,
				firstName: body.firstName,
				lastName: body.lastName,
				sapID: body.sapID,
				keywords: body.keywords,
				email: body.email,
				mobile: body.mobile,
				linkedinUrl: body.linkedinUrl,
				githubUrl: body.githubUrl,
				address: body.address,
				age: body.age,
				gender: body.gender,
				course: body.course,
				admissionYear: body.admissionYear,
				graduationYear: body.graduationYear,
				cgpa: body.cgpa,
				tenthPercentile: body.tenPercentile,
				twelfthPercentile: body.twelvePercentile,
				programmingLanguage: body.programmingLanguage,
				toolsAndTechnologies: body.toolsAndTechnologies,
				coreSkills: body.coreSkills,
				hobbies: body.hobbies,
				certificationAndCourse: body.certificationAndCourse,
				internship: body.internshipArray,
				project: body.projectArray,
				leadership: body.leadershipArray,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			})
			res.status(201).json({ message: "User created succesfully" })
		} else {
			res.status(304).json({ message: 'Doc already exists' })
		}
	} else {
		res.status(405).json({ message: "Method not allowed" })
	}
}
