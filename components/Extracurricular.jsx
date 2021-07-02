export default function Extracurricular() {

	return (
		<div className='m-1 p-1 w-full'>

			<h3 className='mx-auto my-5 p-3 select-none w-full text-center text-white bg-red-900'>Extracurricular</h3>

			<p className='m-1 p-1 text-xs select-none italic'>(Please input comma separated values in case of mulitple values)</p>

			<div className='m-1 w-full flex flex-row justify-around'>
				<input type='text' name='hobbies' id='hobbies' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='Hobbies' required />
			</div>

			<div className='m-1 w-full flex flex-row justify-around'>
				<input type='text' name='certNcourse' id='certNcourse' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='Certificates & Courses' required />
			</div>

		</div>
	)
}

// const extraField = [
// 	{
// 		text: "Hobbies:",
// 		name: "hobbies",
// 		placeholder: "Cycling, Dancing etc.",
// 	},
// 	{
// 		text: "Certificates & Courses (Kindly add complete name of your certifications):",
// 		name: "certiCourse",
// 		placeholder:
// 			"Flutter Development (Coursera), Data Science (Kaggle), etc.",
// 	},
// ]