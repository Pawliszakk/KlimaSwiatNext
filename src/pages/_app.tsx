import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="favicon.ico" type="image/x-icon" sizes="any" />
				<link
					rel="apple-touch-icon"
					href="apple-touch-icon.png"
					type="image/png"
					sizes="180x180"
				/>
				<link rel="shortcut icon" href="favicon.ico" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
