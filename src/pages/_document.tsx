import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="pl">
			<Head />
			<body>
				<div id="overlay-root"></div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
