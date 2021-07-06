import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head></Head>
				<body className='m-0 p-0 bg-white text-black'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
