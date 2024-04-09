import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html lang="pl">
			<Head>
				<NextScript />
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=G-GLZ58RPQPL`}
					strategy="afterInteractive"
					id="googleAds"
				/>
				<Script strategy="afterInteractive" id="googleAds2">
					{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GLZ58RPQPL');
            `}
				</Script>
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
			</Head>
			<body>
				<div id="overlay-root"></div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
