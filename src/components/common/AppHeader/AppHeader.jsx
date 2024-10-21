import React from "react";
import ThemeSwitcherButton from "../ThemeSwitcherButton/ThemeSwitcherButton";
import "./AppHeader.css";
import { HEADER_TEXT } from "../../../constants/constants";
const AppHeader = () => {
	return (
		<div className="app-header-container">
			<div>
				<h1>{HEADER_TEXT}</h1>
			</div>
			<div className="theme-button">
				<ThemeSwitcherButton />
			</div>
		</div>
	);
};

export default AppHeader;
