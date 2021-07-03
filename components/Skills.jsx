import Section from '@/components/Section'

export default function Skills() {

	return (
		<Section name='Skills'>

			<p className='mx-auto my-1 p-1 text-xs select-none italic'>(Please input comma separated values in case of mulitple values)</p>

			<div className='mx-auto my-1 w-full flex flex-row justify-around'>
				<input type='text' name='programmingLanguage' id='programmingLanguage' className='m-2 px-3 py-2 w-full rounded' placeholder='Programming Language' required />
			</div>

			<div className='mx-auto my-1 w-full flex flex-row justify-around'>
				<input type='text' name='toolsAndTechnologies' id='toolsAndTechnologies' className='m-2 px-3 py-2 w-full rounded' placeholder='Tools & Technologies' required />
			</div>

			<div className='mx-auto my-1 w-full flex flex-row justify-around'>
				<input type='text' name='coreSkills' id='coreSkills' className='m-2 px-3 py-2 w-full rounded' placeholder='Core Skills' required />
			</div>

		</Section>
	)
}
