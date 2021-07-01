import NextLink from 'next/link'
import NextHead from 'next/head'
import UserProvider from '@/context/userContext'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {

	return (
		<UserProvider>
			<NextHead>
				<title>CV Form App</title>
			</NextHead>
			<header>
				<nav className='p-1 w-full flex flex-row justify-center border'>
					<NextLink href='/'><a className='mx-2 my-1 p-1'>Home</a></NextLink>
					<NextLink href='/data'><a className='mx-2 my-1 p-1'>Data</a></NextLink>
				</nav>
			</header>
			<Component {...pageProps} />
		</UserProvider>
	)
}
