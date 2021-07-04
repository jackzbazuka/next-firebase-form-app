export default function DatePicker({ field, count }) {
	return (
		<div className='mx-auto my-1 w-full flex flex-row justify-around place-items-center'>
			<p className='m-1 p-1 text-base'>Work Duration: </p>
			<div>
				<label className='m2 p-1'>Started</label>
				<input type='date' name={`${field}Start${count}`} className='m-2 rounded' />
			</div>
			<div>
				<label className='m2 p-1'>Finished</label>
				<input type='date' name={`${field}End${count}`} className='m-2 rounded' />
			</div>
		</div>
	)
}
