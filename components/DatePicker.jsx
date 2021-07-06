export default function DatePicker({ field, count }) {
	return (
		<div className='mx-auto my-1 w-full flex flex-col md:flex-row justify-around place-items-center'>
			<p className='m-1 p-1 text-base select-none'>Work Duration: </p>
			<div className='flex flex-col md:flex-row items-center'>
				<label className='m2 p-1 select-none text-center'>Started</label>
				<input type='date' name={`${field}Start${count}`} className='m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
			</div>
			<div className='flex flex-col md:flex-row items-center'>
				<label className='m2 p-1 select-none text-center'>Finished</label>
				<input type='date' name={`${field}End${count}`} className='m-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
			</div>
		</div>
	)
}
