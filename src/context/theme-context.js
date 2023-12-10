import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
	isBlue: true,
	changeTheme: () => {},
});
export default ThemeContext;

export function ThemeContextProvider({ children }) {
	const [isBlue, setIsBlue] = useState(true);

	const changeThemeHandler = () => {
		const body = document.querySelector('body');
		if (isBlue) {
			body.setAttribute('data-theme', 'blue');
			setIsBlue(false);
		} else {
			body.setAttribute('data-theme', 'gray');
			setIsBlue(true);
		}
	};

	useEffect(() => {
		changeThemeHandler();
	}, []);

	const context = {
		changeTheme: changeThemeHandler,
		isBlue,
	};
	return (
		<ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
	);
}
