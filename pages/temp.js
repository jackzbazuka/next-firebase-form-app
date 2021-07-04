import NextLink from 'next/link'

export default function Home() {

	return (
		<div className='m-1 p-1 grid place-items-center'>
			<NextLink href='/form'><a className='m-2 px-5 py-2 text-lg text-white bg-blue-700 transition-all hover:bg-blue-800 cursor-pointer outline-none border'>Form</a></NextLink>
			<NextLink href='/login'><a className='m-2 px-5 py-2 text-lg text-white bg-blue-700 transition-all hover:bg-blue-800 cursor-pointer outline-none border'>Login</a></NextLink>
			<NextLink href='/signup'><a className='m-2 px-5 py-2 text-lg text-white bg-blue-700 transition-all hover:bg-blue-800 cursor-pointer outline-none border'>SignUp</a></NextLink>
		</div>
	)
}
