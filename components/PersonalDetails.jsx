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
					className='m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					placeholder="First Name"
					required
				/>
				<input
					type="text"
					name="lastName"
					id="lastName"
					className='m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
					placeholder="Last Name"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="sapId"
					id="sapId"
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					placeholder="SAP ID"
					required
				/>
				<input
					type="text"
					name="keywords"
					id="keywords"
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					placeholder="Keywords"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="mobile"
					id="mobile"
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					placeholder="Mobile Number (10 digits)"
					required
				/>
				<input
					type="email"
					name="email"
					id="email"
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					placeholder="Email ID"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="githubUrl"
					id="githubUrl"
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					placeholder="Github Profile URL"
					required
				/>
				<input
					type="text"
					name="linkedinUrl"
					id="linkedinUrl"
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					placeholder="Linkedin Profile URL"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<input
					type="text"
					name="address"
					id="address"
					className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					placeholder="Residential Address"
					required
				/>
			</div>

			<div className="mx-auto my-1 w-full flex flex-row justify-around">
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none" htmlFor="fileToUpload">Your Picture</label>
					<input className="m-1 p-1 select-none rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="file" accept='image/*' name="profilePicture" id="profilePicture" required />
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none">Age</label>
					<select name="age" id="age" className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
						{ageArr.map((item) => (
							<option key={item} value={`${item}`}>
								{item}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-row justify-center place-items-center">
					<label className="mx-1 my-2 p-1 select-none">Gender</label>
					<select name="gender" id="gender" className="m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>
			</div>
		</Section>
	)
}
