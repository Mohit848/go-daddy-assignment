import React, { useContext } from "react";
import "./themeSwitcherButton.css";
import { ThemeContext } from "../../providers/ThemeProvider/ThemeProvider";
import {
	TEXT_DARK,
	TEXT_LIGHT,
	TEXT_SWITCH_TO,
} from "../../../constants/constants";

const ThemeSwitcherButton = ({ props }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div className="switch-container">
			<p>{TEXT_SWITCH_TO}</p>
			<button className="button-theme" onClick={toggleTheme}>
				{theme === "light" ? TEXT_DARK : TEXT_LIGHT}
			</button>
		</div>
	);
};

export default ThemeSwitcherButton;
