export default function InputField({ data }) {
	let reqd = data.optional ? false : true
	// console.log(reqd, data.name)
	return (
		<input
			type="text"
			name={data.name}
			id={data.name}
			className="m-2 px-3 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
			placeholder={data.placeholder}
			required={reqd}
		/>
	)
}
