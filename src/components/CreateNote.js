import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import uuid from "react-uuid";
import axios from "axios";
import { UserContext } from "../user/UserContextProvider";

function CreateNote(props) {
	let history = useHistory();
	const { user } = useContext(UserContext);

	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	};

	const submitNote = async (e) => {
		e.preventDefault();

		const newNote = {
			googleId: user.googleId,
			noteId: uuid(),
			title: note.title,
			content: note.content,
		};

		if (user !== "") {
			await axios
				.post("http://localhost:5000/createnote", newNote)
				.then((res) => {
					props.setContent(newNote);
					history.push("/");
				});
		}

		if (user === "") {
			props.setContent(newNote);
			history.push("/");
		}
	};

	return (
		<div className="createNote-component">
			<p>Create A New Note</p>

			<div className="form-container">
				<form onSubmit={submitNote}>
					<div className="form-title">
						<input
							type="text"
							placeholder="Note Title *"
							name="title"
							autoComplete="off"
							onChange={handleChange}
							maxLength="50"
							required
						/>
					</div>
					<div className="form-detail">
						<textarea
							type="text"
							rows="10"
							placeholder="Content *"
							name="content"
							autoComplete="off"
							onChange={handleChange}
							required
						/>
					</div>

					<Button
						className="submit-btn"
						variant="contained"
						endIcon={<SendIcon />}
						type="submit"
					>
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
}

export default CreateNote;
