export default function Section({ name, children }) {
	return (
		<div className="m-1 px-3 py-1 w-full">
			<h3 className="mx-auto my-5 p-3 rounded select-none w-full text-lg md:text-base text-center text-white bg-red-900">{name}</h3>
			{children}
		</div>
	)
}