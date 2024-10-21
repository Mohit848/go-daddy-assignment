import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
	const getInitialTheme = () => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme ? savedTheme : "light";
	};

	const [theme, setTheme] = useState(getInitialTheme);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeProvider, ThemeContext };
