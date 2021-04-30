import React from "react";
import "./assets/styles/main.css";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import UserContextProvider from "./user/UserContextProvider";
import { useDarkMode } from "./components/Theme/useDarkMode";
import { ThemeProvider } from "styled-components";
import {
	GlobalStyles,
	lightTheme,
	darkTheme,
} from "./components/Theme/globalStyles";

function App() {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;

	return (
		<Router>
			<UserContextProvider>
				<ThemeProvider theme={themeMode}>
					<GlobalStyles />
					<div className="App">
						<div className="App-content">
							<div className="sidebar">
								<Sidebar />
							</div>
							<div className="main-content">
								<MainContent toggleTheme={toggleTheme} theme={theme} />
							</div>
						</div>
					</div>
				</ThemeProvider>
			</UserContextProvider>
		</Router>
	);
}

export default App;
