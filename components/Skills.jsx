export default function Skills() {

	return (
		<div className='m-1 p-1 w-full'>

			<h3 className='mx-auto my-5 p-3 select-none w-full text-center text-white bg-red-900'>Skills</h3>

			<p className='m-1 p-1 text-xs select-none italic'>(Please input comma separated values in case of mulitple values)</p>

			<div className='m-1 w-full flex flex-row justify-around'>
				<input type='text' name='programmingLanguage' id='programmingLanguage' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='Programming Language' required />
			</div>

			<div className='m-1 w-full flex flex-row justify-around'>
				<input type='text' name='toolsAndTechnologies' id='toolsAndTechnologies' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='Tools & Technologies' required />
			</div>

			<div className='m-1 w-full flex flex-row justify-around'>
				<input type='text' name='coreSkills' id='coreSkills' className='m-2 px-3 py-2 border-2 focus:border-blue-800 outline-none w-full' placeholder='Core Skills' required />
			</div>

		</div>
	)
}

// const skillField = [
// 	{
// 		text: "Programming Languages:",
// 		name: "lang",
// 		placeholder: "C++, Python, Java, JavaScript, PHP etc.",
// 	},
// 	{
// 		text: "Tools & Technologies: ",
// 		name: "tools",
// 		placeholder: "MERN, MongoDB, Web Development etc.",
// 	},
// 	{
// 		text: "Core Skills:",
// 		name: "core",
// 		placeholder: "Communication, Leadership, Conflict Resolution etc.",
// 	},
// ]