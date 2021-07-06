import NextHead from "next/head"

export default function Layout({ children }) {
	return (
		<div className='w-full flex flex-col justify-between items-center min-h-screen'>
			<NextHead>
				<title>NMIMS - STME Resume Form</title>
				<link rel="shortcut icon" href="/favicon.ico"></link>
			</NextHead>
			<header className='w-full m-0 p-0'>
				<nav className='w-full m-0 px-auto py-10 md:py-11 lg:py-12 flex flex-row justify-center items-center text-white bg-gray-900 select-none'>
					<img
						className='mx-3 md:mx-3 lg:mx-3 px-2 md:px-3 lg:px-4 h-10 md:h-11 lg:h-12 bg-white'
						src='/logo.png'
						alt='Logo of NMIMS'
					/>
					<h1 className='mx-1 md:mx-3 lg:mx-3 px-2 md:px-3 lg:px-4 text-sm md:text-lg lg:text-xl text-center'>
						NMIMS - School of Technology Management & Engineering
					</h1>
				</nav>
			</header>
			{children}
			<footer className='w-full py-5 md:py-14 grid place-items-center text-white bg-gray-900 select-none'>
				<div className='mx-auto my-1 flex flex-row justify-center'>
					<h4 className="mx-auto my-5 px-4 py-2 text-sm md:text-base lg:text-base text-center border rounded animate-pulse border-purple-700">DEVELOPED BY</h4>
				</div>
				<div className='mx-auto my-5 p-1 flex flex-row justify-center divide-x text-xs md:text-base'>
					<p className="px-3 md:px-5 lg:px-7 py-2 text-center">Shivanshu Singh</p>
					<p className="px-4 md:px-5 lg:px-7 py-2 text-center">Milind Sathe</p>
					<p className="px-4 md:px-5 lg:px-7 py-2 text-center">Ritish Mohapatra</p>
				</div>
			</footer>
		</div>
	)
}
