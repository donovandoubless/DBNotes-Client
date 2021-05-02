import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Logout() {
	const handleSignOut = () => {
		axios.get("/auth/logout").then((res) => {
			window.location.href = "/";
		});
	};

	return (
		<div className="logout-component">
			<Button
				className="submit-btn"
				variant="contained"
				onClick={handleSignOut}
			>
				Sign Out
			</Button>
		</div>
	);
}

export default Logout;
