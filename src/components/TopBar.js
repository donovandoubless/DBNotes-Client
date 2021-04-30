import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { UserContext } from "../user/UserContextProvider";
import Login from "./Login";
import Logout from "./Logout";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReplayIcon from "@material-ui/icons/Replay";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Tooltip from "@material-ui/core/Tooltip";

function TopBar(props) {
	const { user } = useContext(UserContext);
	const [active, setActive] = useState(false);

	return (
		<div className="topbar-component">
			<div className="topbar-action">
				<Tooltip title="Refresh Page">
					<ReplayIcon
						className="action-icon"
						onClick={() => {
							window.open("/", "_self");
						}}
					/>
				</Tooltip>
				<Tooltip title="Toggle light/dark theme">
					{props.theme === "light" ? (
						<Brightness4Icon
							className="action-icon"
							onClick={() => {
								props.toggleTheme();
							}}
						/>
					) : (
						<Brightness5Icon
							className="action-icon"
							onClick={() => {
								props.toggleTheme();
							}}
						/>
					)}
				</Tooltip>
			</div>
			{user === "" ? (
				<Login />
			) : (
				<div className="avatar">
					<p>{user.name}</p>
					<Avatar src={user.avatar} className="avatar-pic" />
					<ExpandMoreIcon
						className="expand-icon"
						onClick={() => setActive(!active)}
					/>
					{active && <Logout />}
				</div>
			)}
		</div>
	);
}

export default TopBar;
