import { ReactNode } from 'react';

import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import PhoneIcon from '../UI/Icons/PhoneIcon';
import Backdrop from '../UI/Backdrop/Backdrop';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
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
		</>
	);
};

export default Layout;
