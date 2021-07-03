import Section from '@/components/Section'

export default function PersonalDetails() {

	const ageArr = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

	return (
		<Section name='Personal Information'>

			<div className="m-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="firstName"
					id="firstName"
					className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
					placeholder="First Name"
					required
				/>
				<input
					type="text"
					name="lastName"
					id="lastName"
					className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
					placeholder="Last Name"
					required
				/>
			</div>

			<div className="m-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="mobile"
					id="mobile"
					className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
					placeholder="Mobile Number (10 digits)"
					required
				/>
				<input
					type="email"
					name="email"
					id="email"
					className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
					placeholder="Email ID"
					required
				/>
			</div>

			<div className="m-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="githuburl"
					id="githuburl"
					className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
					placeholder="Github Profile URL"
					required
				/>
				<input
					type="text"
					name="linkedinurl"
					id="linkedinurl"
					className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
					placeholder="Linkedin Profile URL"
					required
				/>
			</div>

			<div className="m-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="address"
					id="address"
					className="m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full"
					placeholder="Residential Address"
					required
				/>
			</div>

			<div className="m-1 w-full flex flex-row justify-around">
				<div className="flex flex-row justify-center place-items-center">
					<label className="m-2 p-1" htmlFor="fileToUpload">
						Profile Picture
					</label>
					<input type="file" name="profilepicture" id="profilepicture" className="m-1 p-1 border" required />
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="m-2 p-1">Age</label>
					<select name="age" id="age" className="m-2 p-2 outline-none border" required>
						{ageArr.map((item) => (
							<option key={item} value={`${item}`}>
								{item}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="m-2 p-1">Gender</label>
					<select name="gender" id="gender" className="m-2 p-2 outline-none border" required>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
			</div>
		</Section>
	)
}

// const nameField = {
// 	firstName: {
// 		text: "First Name",
// 		name: "firstName",
// 		placeholder: "Joseph",
// 	},
// 	lastName: {
// 		text: "Last Name",
// 		name: "lastName",
// 		placeholder: "Smith",
// 	},
// }

// const personalField = [
// 	{
// 		text: "Age:",
// 		name: "age",
// 		placeholder: "19",
// 	},
// 	{
// 		text: "Mobile Number:",
// 		name: "mobNo",
// 		placeholder: "10 digit number",
// 	},
// 	{
// 		text: "LinkedIn Profile Link:",
// 		name: "linkedIn",
// 		placeholder: "https://www.linkedin.com/in/joseph-smith-213dn123",
// 	},
// 	{
// 		text: "GitHub Profile Link:",
// 		name: "gitHubLink",
// 		placeholder: "https://github.com/JosephSmith",
// 	},
// 	{
// 		text: "NMIMS Email ID:",
// 		name: "email",
// 		placeholder: "joseph.smith26@nmims.edu.in",
// 	},
// 	{
// 		text: "Permanent Address:",
// 		name: "address",
// 		placeholder:
// 			"Flat 1302, Amrit Apartments, Sector 12, Kharghar, Maharashtra",
// 	},
// 	{
// 		text: "Spoken Languages:",
// 		name: "spokenLang",
// 		placeholder: "English, Hindi, Gujarati etc.",
// 	},
// 	// {
// 	//   text: "",
// 	//   name: "",
// 	//   placeholder: "",
// 	// },
// ]
