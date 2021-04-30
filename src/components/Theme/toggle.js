import React from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Tooltip from "@material-ui/core/Tooltip";

export const Toggle = ({ theme, toggleTheme }) => {
	return (
		<div onClick={toggleTheme}>
			<Tooltip title="Toggle light/dark theme" placement="bottom">
				{theme === "light" ? (
					<Brightness4Icon
						fontSize="large"
						style={{
							color: "#fff",
							position: "absolute",
							top: "1.25rem",
							right: "2rem",
						}}
					/>
				) : (
					<Brightness7Icon
						fontSize="large"
						style={{
							color: "#f5ba13",
							position: "absolute",
							top: "1.25rem",
							right: "2rem",
						}}
					/>
				)}
			</Tooltip>
		</div>
	);
};
