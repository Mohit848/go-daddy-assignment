import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./components/providers/ThemeProvider/ThemeProvider";
import "./styles/global.css";
import "./styles/variables.css";
import ContentWrapper from "./components/providers/ContentWrapper/ContentWrapper";
import AppHeader from "./components/common/AppHeader/AppHeader";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<ContentWrapper>
				<App />
			</ContentWrapper>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
