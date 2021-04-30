import React, { useContext, useState } from "react";
import { UserContext } from "../user/UserContextProvider";
import Modal from "./Modal";
import NoteCard from "./NoteCard";

function Notes(props) {
	const { user } = useContext(UserContext);
	const [modal, setModal] = useState(false);
	const [modalIndex, setModalIndex] = useState(0);

	const handleModal = (value) => {
		setModal(value.setting);
		setModalIndex(value.index);
	};

	return (
		<div className="notes-component">
			{modal && (
				<Modal setModal={handleModal} modal={props.content[modalIndex]} />
			)}
			{props.content === ""
				? ""
				: props.content.map((note, index) => {
						return (
							<NoteCard
								key={index}
								index={index}
								googleId={user.googleId}
								noteId={note.noteId}
								title={note.title}
								content={note.content}
								onDelete={props.delete}
								setModal={handleModal}
							/>
						);
				  })}
		</div>
	);
}

export default Notes;
