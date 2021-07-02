import InputGroup from "./InputGroup"

export default function PersonalDetails() {

	const nameField = {
		firstName: {
			text: "First Name:",
			name: "firstName",
			placeholder: "Joseph",
		},
		lastName: {
			text: "Last Name:",
			name: "lastName",
			placeholder: "Smith",
		},
	}

	const personalField = [
		{
			text: "Age:",
			name: "age",
			placeholder: "19",
		},
		{
			text: "Mobile Number:",
			name: "mobNo",
			placeholder: "10 digit number",
		},
		{
			text: "LinkedIn Profile Link:",
			name: "linkedIn",
			placeholder: "https://www.linkedin.com/in/joseph-smith-213dn123",
		},
		{
			text: "GitHub Profile Link:",
			name: "gitHubLink",
			placeholder: "https://github.com/JosephSmith",
		},
		{
			text: "NMIMS Email ID:",
			name: "email",
			placeholder: "joseph.smith26@nmims.edu.in",
		},
		{
			text: "Permanent Address:",
			name: "address",
			placeholder:
				"Flat 1302, Amrit Apartments, Sector 12, Kharghar, Maharashtra",
		},
		{
			text: "Spoken Languages:",
			name: "spokenLang",
			placeholder: "English, Hindi, Gujarati etc.",
		},
		// {
		//   text: "",
		//   name: "",
		//   placeholder: "",
		// },
	]

	return (
		<>
			<h2> PERSONAL DETAILS </h2>
			<br />
			<div className="row">
				<div className="col">
					<InputGroup field={nameField.firstName} />
				</div>
				<div className="col">
					<InputGroup field={nameField.lastName} />
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="gender">Gender</label>
				<select name="gender" id="gender" className="form-control" required>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>

			{personalField.map((dataField, index) => (
				<InputGroup key={index} field={dataField} />
			))}

			<div className="form-group">
				<label htmlFor="fileToUpload">Upload Your Profile Picture</label>
				<input
					type="file"
					name="fileToUpload"
					id="fileToUpload"
					className="form-control"
					required
				/>
			</div>
			<br />
		</>
	)
}
