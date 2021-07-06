import Section from "@/components/Section"
import InputField from "./InputField"

export default function PersonalDetails({ email }) {
	const ageArr = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	const personal = {
		firstName: { name: "firstName", placeholder: "First Name: Anna" },
		lastName: { name: "lastName", placeholder: "Last Name: Morgan" },
		sapId: { name: "sapId", placeholder: "SAP ID: 70472015001" },
		keywords: {
			name: "keywords",
			placeholder: "Keywords: Operations, Design, Fullstack, Technical, Management",
		},
		mobile: { name: "mobile", placeholder: "Mobile Number (10 digits)" },
		email: {
			name: "email",
			value: email,
			placeholder: "NMIMS Email ID: anna.morgan@nmims.edu.in",
		},
		githubUrl: {
			name: "githubUrl",
			placeholder: "Github Profile URL: https://github.com/anna",
			optional: true,
		},
		linkedinUrl: {
			name: "linkedinUrl",
			placeholder: "Linkedin Profile URL: https://linkedin.com/anna-123xaw",
		},
		address: {
			name: "address",
			placeholder: "Residential Address: Flat 205, XYZ apts, Santacruz, Mumbai, Maharashtra",
		},
	}
	return (
		<Section name="Personal Information">
			<div className="mx-auto my-1 w-full flex flex-col md:flex-row justify-around">
				<InputField data={personal.firstName} />
				<InputField data={personal.lastName} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-col md:flex-row justify-around">
				<InputField data={personal.sapId} />
				<InputField data={personal.keywords} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-col md:flex-row justify-around">
				<InputField data={personal.mobile} />
				<InputField data={personal.email} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-col md:flex-row justify-around">
				<InputField data={personal.githubUrl} />
				<InputField data={personal.linkedinUrl} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-col md:flex-row justify-around">
				<InputField data={personal.address} />
			</div>

			<div className="mx-auto my-1 w-full flex flex-col md:flex-row justify-around">
				<div className="flex flex-row justify-center items-center">
					<label className="mx-1 my-2 p-1 select-none" htmlFor="fileToUpload">
						Your Picture
					</label>
					<input
						className="m-1 p-1 select-none rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						type="file"
						accept="image/*"
						name="profilePicture"
						id="profilePicture"
						required
					/>
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none">Age</label>
					<select
						name="age"
						id="age"
						className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						required
					>
						{ageArr.map((item) => (
							<option key={item} value={`${item}`}>
								{item}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none">Gender</label>
					<select
						name="gender"
						id="gender"
						className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						required
					>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
			</div>
		</Section>
	)
}
