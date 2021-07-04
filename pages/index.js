import NextLink from 'next/link'

export default function Home() {
	return (
		<div className="w-full grid place-items-center">
			<NextLink href='/form'><a className='mx-auto my-10 px-5 py-3 rounded-md text-white bg-blue-800'>Form</a></NextLink>
			<NextLink href='/login'><a className='mx-auto my-10 px-5 py-3 rounded-md text-white bg-blue-800'>Login</a></NextLink>
			<NextLink href='/signup'><a className='mx-auto my-10 px-5 py-3 rounded-md text-white bg-blue-800'>Signup</a></NextLink>
		</div>
	)
}
