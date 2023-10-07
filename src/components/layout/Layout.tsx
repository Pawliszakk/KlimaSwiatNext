import { ReactNode } from 'react';

import Footer from './Footer/Footer';
import Nav from './Nav/Nav';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;