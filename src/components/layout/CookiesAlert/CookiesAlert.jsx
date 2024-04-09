import { useState, useEffect } from 'react';
import classes from './CookiesAlert.module.css';

const CookiesAlert = () => {
	const [isClickedOk, setIsClickedOk] = useState(true);

	useEffect(() => {
		const cookiesAccepted = localStorage.getItem('cookiesOK');
		if (cookiesAccepted) {
			setIsClickedOk(true);
		} else {
			setIsClickedOk(false);
		}
	}, []);

	const buttonClickHandler = () => {
		localStorage.setItem('cookiesOK', 'true');
		setIsClickedOk(true);
	};

	return (
		<>
			{isClickedOk ? (
				<div></div>
			) : (
				<div className={classes.box}>
					<p>
						Ta strona korzysta z ciasteczek, dalsze korzystanie ze strony
						oznacza, że zgadzasz się na ich użycie.
					</p>
					<button onClick={buttonClickHandler}>OK</button>
				</div>
			)}
		</>
	);
};

export default CookiesAlert;

// import { useState } from 'react';
// import classes from './CookiesAlert.module.css';
// const CookiesAlert = () => {
// 	const [isClickedOk, setIsClickedOk] = useState(false);

// 	const buttonClickHandler = () => setIsClickedOk(true);

// 	return (
// 		<>
// 			{isClickedOk ? (
// 				<div></div>
// 			) : (
// 				<div className={classes.box}>
// 					<p>
// 						Ta strona korzysta z ciasteczek, dalsze korzystanie ze strony
// 						oznacza, że zgadzasz się na ich użycie.
// 					</p>
// 					<button onClick={buttonClickHandler}>OK</button>
// 				</div>
// 			)}
// 		</>
// 	);
// };

// export default CookiesAlert;
