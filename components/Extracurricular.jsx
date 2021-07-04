import Section from '@/components/Section'

export default function Extracurricular() {

	return (
		<Section name='Extracurricular'>

			<p className='mx-auto my-1 p-1 text-xs select-none italic'>(Please input comma separated values in case of mulitple values)</p>

			<div className='mx-auto my-1 w-full flex flex-row justify-around'>
				<input type='text' name='hobbies' id='hobbies' className='m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Hobbies' required />
			</div>

			<div className='mx-auto my-1 w-full flex flex-row justify-around'>
				<input type='text' name='certificationAndCourse' id='certificationAndCourse' className='m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Certificates & Courses' required />
			</div>

		</Section>
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