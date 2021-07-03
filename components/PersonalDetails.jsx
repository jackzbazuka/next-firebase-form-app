import Section from '@/components/Section'

export default function PersonalDetails() {

	const ageArr = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

	return (
		<Section name='Personal Information'>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="firstName"
					id="firstName"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="First Name"
					required
				/>
				<input
					type="text"
					name="lastName"
					id="lastName"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="Last Name"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="sapId"
					id="sapId"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="SAP ID"
					required
				/>
				<input
					type="text"
					name="keywords"
					id="keywords"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="Keywords"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="mobile"
					id="mobile"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="Mobile Number (10 digits)"
					required
				/>
				<input
					type="email"
					name="email"
					id="email"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="Email ID"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="githubUrl"
					id="githubUrl"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="Github Profile URL"
					required
				/>
				<input
					type="text"
					name="linkedinUrl"
					id="linkedinUrl"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="Linkedin Profile URL"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="address"
					id="address"
					className="m-2 px-3 py-2 w-full rounded"
					placeholder="Residential Address"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1" htmlFor="fileToUpload">Your Picture</label>
					<input className="m-1 p-1 rounded" type="file" accept='image/*' name="profilePicture" id="profilePicture" required />
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1">Age</label>
					<select name="age" id="age" className="m-2 rounded" required>
						{ageArr.map((item) => (
							<option key={item} value={`${item}`}>
								{item}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1">Gender</label>
					<select name="gender" id="gender" className="m-2 rounded" required>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
			</div>
		</Section>
	)
}
