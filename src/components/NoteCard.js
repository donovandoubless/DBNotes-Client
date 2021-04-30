import React, { useContext } from "react";
import axios from "axios";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { UserContext } from "../user/UserContextProvider";

function NoteCard(props) {
	const { user } = useContext(UserContext);

	const deleteNote = async (e) => {
		e.stopPropagation();
		const deleteContent = {
			googleId: props.googleId,
			noteId: props.noteId,
		};

		if (user !== "") {
			await axios
				.post("https://mydb-notes.herokuapp.com/deletenote", deleteContent)
				.then((res) => {
					props.onDelete(deleteContent.noteId);
				});
		}

		if (user === "") {
			props.onDelete(deleteContent.noteId);
		}
	};

	const handleModal = () => {
		const viewModal = {
			setting: true,
			index: props.index,
		};

		props.setModal(viewModal);
	};

	return (
		<div className="notecard-component" onClick={handleModal}>
			<div className="note-title">
				{props.title.length > 20 ? (
					<p>{props.title.substring(0, 20)} .....</p>
				) : (
					<p>{props.title}</p>
				)}

				<DeleteOutlineIcon className="delete-icon" onClick={deleteNote} />
			</div>
			<div className="note-content">
				{props.content.length > 130 ? (
					<p>{props.content.substring(0, 130)} .....</p>
				) : (
					<p>{props.content}</p>
				)}
			</div>
		</div>
	);
}

export default NoteCard;
