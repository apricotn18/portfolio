import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href='https://fonts.googleapis.com/css?family=Lexend+Deca|Kosugi&display=swap' rel='stylesheet' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;