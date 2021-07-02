import NextHead from "next/head"
import NextImage from 'next/image'
import "tailwindcss/tailwind.css"

export default function App({ Component, pageProps }) {

	return (
		<>
			<NextHead>
				<title>NMIMS - STME Resume Form</title>
			</NextHead>
			<header>
				<nav className="px-2 py-5 w-full flex flex-row justify-center border bg-white">
					<NextImage src="/logo.png" alt="Logo of NMIMS" width={100} height={10} />
					<h1 className='mx-10 my-1 p-1 text-xl select-none'>NMIMS - School of Technology Management & Engineering</h1>
				</nav>
			</header>
			<Component {...pageProps} />
			<footer className='px-auto py-16 w-full grid place-items-center text-white bg-gray-900'>
				<h4 className='m-1 p-1'>Made By</h4>
				<div className='m-1 p-1 w-full flex flex-row justify-center divide-x'>
					<p className='px-3 py-1 text-center'>Milind Sathe</p>
					<p className='px-3 py-1 text-center'>Shivanshu Singh</p>
					<p className='px-3 py-1 text-center'>Darrsheni Sapovadia</p>
					<p className='px-3 py-1 text-center'>Rupali Vastani</p>
					<p className='px-3 py-1 text-center'>Rushali Vastani</p>
					<p className='px-3 py-1 text-center'>Manthan Tripathi</p>
				</div>
			</footer>
		</>
	)
}
