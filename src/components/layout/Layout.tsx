import { ReactNode } from 'react';

import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import PhoneIcon from '../UI/Icons/PhoneIcon';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import CookiesAlert from './CookiesAlert/CookiesAlert';
interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<LoadingSpinner />
			<Nav />
			<main>{children}</main>
			<Footer />
			<PhoneIcon />
			<CookiesAlert />
		</>
	);
};

export default Layout;
