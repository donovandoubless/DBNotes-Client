import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Modal(props) {
	const handleModal = () => {
		const viewModal = {
			setting: false,
			index: 0,
		};
		props.setModal(viewModal);
	};

	return (
		<div className="modal-component" id="modal-component" onClick={handleModal}>
			<HighlightOffIcon className="close-icon" onClick={handleModal} />
			<div
				className="modal"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className="modal-title">
					<p>{props.modal.title}</p>
				</div>
				<div className="modal-content">
					<p>{props.modal.content}</p>
				</div>
			</div>
		</div>
	);
}

export default Modal;
