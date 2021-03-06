import React from "react";
import Button from "@material-ui/core/Button";

function Login() {
	return (
		<div className="login-component">
			<Button
				className="submit-btn"
				variant="contained"
				onClick={() => {
					window.open(`${process.env.REACT_APP_LOGIN}`, "_self");
				}}
			>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
