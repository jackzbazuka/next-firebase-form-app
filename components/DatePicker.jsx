export default function DatePicker() {
	return (
		<div className='mx-auto my-1 flex flex-row justify-around place-items-center'>
			<label className='m2 p-1'>Started</label>
			<input type='date' className='m-2 rounded' />
			<label className='m2 p-1'>Finished</label>
			<input type='date' className='m-2 rounded' />
		</div>
	)
}