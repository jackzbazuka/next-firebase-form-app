import admin from "@/firebase/adminApp"
import firebase from "firebase-admin"

export default async function handler(req, res) {
	const { method, body } = req

	const db = admin.firestore()

	if (method == "POST") {
		await db.collection(`${body.course}-${body.graduationYear}`).doc(body.sapId).set({
			studentID: body.uid,
			firstName: body.firstName,
			lastName: body.lastName,
			sapId: body.sapId,
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
			tenPercentile: body.tenPercentile,
			twelvePercentile: body.twelvePercentile,
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
		res.status(405).json({ message: "Method not allowed" })
	}
}
