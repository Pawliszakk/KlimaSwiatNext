import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="pl">
			<Head>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<title>Klimatyzacja Zamość | Montaż | Serwis | Pompy Ciepła</title>
				<meta
					name="description"
					content="Potrzebujesz klimatyzacji? Jesteś z Zamościa?
					 Klima Świat to firma zajmująca się montażem, serwisem oraz doborem klimatyzacji - szybko i skutecznie. Zadzwoń już dziś!"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body>
				<div id="overlay-root"></div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
