import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title>Klimatyzacja Zamość | Montaż | Serwis | Pompy Ciepła</title>
				<meta
					name="description"
					content="Potrzebujesz klimatyzacji? Jesteś z Zamościa?CD APP
					NPM RUN DEV
					 Klima Świat to firma zajmująca się montażem, serwisem oraz doborem klimatyzacji - szybko i skutecznie. Zadzwoń już dziś!"
				></meta>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
