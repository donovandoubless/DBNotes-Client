import React from "react";
import Button from "@material-ui/core/Button";

function Login() {
	return (
		<div className="login-component">
			<Button
				className="submit-btn"
				variant="contained"
				onClick={() => {
					window.open(
						"https://mydb-notes.herokuapp.com//auth/google/",
						"_self"
					);
				}}
			>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
