import { useContext } from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '@/context/theme-context';

import classes from './ThemeIcon.module.css';

const ThemeIcon = () => {
	const themeCtx = useContext(ThemeContext);

	return (
		<motion.div
			whileTap={{ scale: 0.5 }}
			className={classes.themeIcon}
			onClick={themeCtx.changeTheme}
		></motion.div>
	);
};

export default ThemeIcon;
