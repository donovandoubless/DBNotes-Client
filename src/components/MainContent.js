import React, { useState, useContext, useEffect } from "react";
import TopBar from "./TopBar";
import { Route } from "react-router-dom";
import Notes from "./Notes";
import CreateNote from "./CreateNote";
import { UserContext } from "../user/UserContextProvider";
import Pagination from "./Pagination";

function MainContent(props) {
	const [content, setContent] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [contentsPerPage, setContentsPerPage] = useState(8);
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);

	const { user } = useContext(UserContext);

	const handleContent = (value) => {
		setContent([...content, value]);
	};

	const handleDelete = (value) => {
		const noteUpdate = content.filter((note) => {
			return note.noteId !== value;
		});

		setContent(noteUpdate);
	};

	useEffect(() => {
		if (user !== "") {
			setContent(user.notes);
		}
	}, [user]);

	//Pagination
	const indexOfLastContent = currentPage * contentsPerPage;
	const indexOfFirstContent = indexOfLastContent - contentsPerPage;
	const currentContent = content.slice(indexOfFirstContent, indexOfLastContent);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	const checkPageSize = () => {
		if (width > 1612) {
			setContentsPerPage(8);
		} else if (width > 1263) {
			setContentsPerPage(6);
		} else if (width > 903) {
			if (height > 1000) {
				setContentsPerPage(6);
			} else if (height < 550) {
				setContentsPerPage(2);
			} else {
				setContentsPerPage(4);
			}
		} else if (width > 768) {
			if (height < 500) {
				setContentsPerPage(1);
			} else {
				setContentsPerPage(2);
			}
		}

		if (width > 638 && width <= 768) {
			if (height <= 500) {
				setContentsPerPage(2);
			} else {
				setContentsPerPage(4);
			}
		} else if (width < 638) {
			if (height < 330) {
				setContentsPerPage(1);
			} else {
				setContentsPerPage(2);
			}
		}
	};

	useEffect(() => {
		const updateWindowDimensions = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener("resize", updateWindowDimensions);
		checkPageSize();
		return () => {
			window.removeEventListener("resize", updateWindowDimensions);
		};
	});

	return (
		<div className="mainContent-component">
			<div className="topbar">
				<TopBar toggleTheme={props.toggleTheme} theme={props.theme} />
			</div>
			<div className="notes">
				<Route path="/" exact>
					<Notes content={currentContent} delete={handleDelete} />
					<Pagination
						contentsPerPage={contentsPerPage}
						totalContent={content.length}
						paginate={paginate}
					/>
				</Route>

				<Route path="/createnote" exact>
					<CreateNote setContent={handleContent} />
				</Route>
			</div>
		</div>
	);
}

export default MainContent;
