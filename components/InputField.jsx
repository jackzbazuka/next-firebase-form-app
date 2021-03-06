export default function InputField({ data }) {
	// For testing both false else, should be false:true
	let reqd = data.optional ? false : true
	// console.log(reqd, data.name)
	let disable = data.value ? true : false
	return (
		<input
			type="text"
			name={data.name}
			id={data.name}
			className="mx-auto md:mx-1 my-2 px-3 py-2 w-11/12 md:w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			placeholder={data.placeholder}
			required={reqd}
			value={data.value}
			disabled={disable}
		/>
	)
}
