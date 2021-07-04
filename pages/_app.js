import NextHead from "next/head"
import "tailwindcss/tailwind.css"

export default function App({ Component, pageProps }) {
	return (
		<>
			<NextHead>
				<title>NMIMS - STME Resume Form</title>
				<link rel="shortcut icon" href="/favicon.ico"></link>
			</NextHead>
			<Component {...pageProps} />
		</>
	)
}
