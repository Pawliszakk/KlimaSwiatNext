import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Klimatyzacja Zamość | Montaż | Serwis | Pompy Ciepła</title>
				<meta
					name="description"
					content="Potrzebujesz klimatyzacji? Jesteś z Zamościa?
					 Klima Świat zajmuje się montażem, serwisem oraz doborem klimatyzacji - szybko i skutecznie. Zadzwoń już dziś!"
				></meta>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
