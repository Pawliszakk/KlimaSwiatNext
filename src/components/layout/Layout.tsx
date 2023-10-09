import { ReactNode } from 'react';

import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import PhoneIcon from '../UI/Icons/PhoneIcon';
interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
			<PhoneIcon />
		</>
	);
};

export default Layout;
