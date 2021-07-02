import admin from "@/firebase/adminApp";
import firebase from "firebase-admin";

export default async function handler(req, res) {
  const { method, body } = req;

  const db = admin.firestore();

  if (method == "POST") {
    await db
      .collection(`${body.course}-${body.graduationYear}`)
      .doc(body.firstName)
      .set({
        firstName: body.firstName,
        lastName: body.lastName,
        mobile: body.mobile,
        linkedinurl: body.linkedinurl,
        githuburl: body.githuburl,
        email: body.email,
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
        certNcourse: body.certNcourse,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

    console.log(`${body.firstName} entered in firestore`);

    res.status(201).json({ message: "User created succesfully" });
  } else if (method == "GET") {
    res.status(200).json({ message: "Data" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
