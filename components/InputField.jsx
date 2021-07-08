import { useState } from "react"

export default function InputField({ data, userData }) {
	// For testing both false else, should be false:true
	let reqd = data.optional ? false : false
	// // console.log(reqd, data.name)
	let disable = data.email ? true : false
	if (userData !== undefined && userData !== null) {
		// The state var is initially null, then undefined, data state then undefined.
		// idk why, but oh well, as long as this workaround works
		// console.log(userData)
		let nameVal = data.name
		const [inputFieldVal, setInputVal] = useState(userData[nameVal])
		const changeHandlder = (e) => {
			setInputVal(e.target.value)
		}
		return (
			<input
				type="text"
				name={data.name}
				id={data.name}
				className="mx-auto md:mx-1 my-2 px-3 py-2 w-11/12 md:w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				placeholder={data.placeholder}
				required={reqd}
				value={inputFieldVal}
				onChange={changeHandlder}
				disabled={disable}
			/>
		)
	}
	// console.log(userData)
	else
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
