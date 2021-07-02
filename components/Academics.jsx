export default function Academics() {

	return (
		<div className='m-1 p-1 w-full'>
			<h3 className='mx-auto my-5 p-3 select-none w-full text-center text-white bg-red-900'>Academics</h3>

			<div className='m-1 w-full flex flex-row justify-around'>

				<div className='flex flex-row justify-center place-items-center'>
					<label className='m-2 p-1'>Course</label>
					<select name='course' id='course' className='m-2 p-2 outline-none border' required>
						<option value='MBATech'>MBATech</option>
						<option value='BTech'>BTech</option>
					</select>
				</div>

				<div className='flex flex-row justify-center place-items-center'>
					<label className='m-2 p-1'>Admission Year</label>
					<select name='admissionYear' id='admissionYear' className='m-2 p-2 outline-none border' required>
						<option value='2017'>2017</option>
						<option value='2018'>2018</option>
						<option value='2019'>2019</option>
						<option value='2020'>2020</option>
					</select>
				</div>

				<div className='flex flex-row justify-center place-items-center'>
					<label className='m-2 p-1'>Graduation Year</label>
					<select name='graduationYear' id='graduationYear' className='m-2 p-2 outline-none border' required>
						<option value='2022'>2022</option>
						<option value='2023'>2023</option>
						<option value='2024'>2024</option>
						<option value='2025'>2025</option>
					</select>
				</div>
			</div>

			<div className='m-1 w-full flex flex-row justify-around'>
				<input type='text' name='cgpa' id='cgpa' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='CGPA (scale of 4)' required />
				<input type='text' name='tenPercentile' id='tenPercentile' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='10th Percentile' required />
				<input type='text' name='twelvePercentile' id='twelvePercentile' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='12th Percentile' required />
			</div>

		</div>
	)
}

// const acadField = [
// 	{
// 		text: "Course - Duration:",
// 		name: "courseDur",
// 		placeholder: "May 2019 - May 2024",
// 	},
// 	{
// 		text: "CGPA:",
// 		name: "cgpa",
// 		placeholder: "3.11",
// 	},
// 	{
// 		text: "10th Percentage:",
// 		name: "percent10",
// 		placeholder: "95.6",
// 	},
// 	{
// 		text: "12th Percentage:",
// 		name: "percent12",
// 		placeholder: "85.2",
// 	},
// ]