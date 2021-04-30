import React from "react";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import SubjectIcon from "@material-ui/icons/Subject";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<div className="sidebar-component">
			<div className="title">
				<p>DBNotes</p>
			</div>

			<Link to="/" className="link">
				<div className="myNotes">
					<Tooltip title="My Notes">
						<SubjectIcon className="sidebar-button" />
					</Tooltip>

					<p>My Notes</p>
				</div>
			</Link>

			<Link to="/createnote" className="link">
				<div className="createNote">
					<Tooltip title="Create Note">
						<ControlPointIcon className="sidebar-button" />
					</Tooltip>

					<p>Create Note</p>
				</div>
			</Link>
		</div>
	);
}

export default Sidebar;

// style={{ textDecoration: "none", color: "black" }}
