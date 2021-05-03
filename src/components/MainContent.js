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
		if (width > 620 && width < 1067) {
			setContentsPerPage(2);
		}

		if (width >= 1067 && width < 1487) {
			setContentsPerPage(4);
		}

		if (width >= 1487 && width < 1900) {
			setContentsPerPage(6);
		}

		if (width > 1900) {
			setContentsPerPage(8);
		}
	};

	useEffect(() => {
		const updateWindowDimensions = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener("resize", updateWindowDimensions);
		checkPageSize();
		return () => {
			window.removeEventListener("resize", updateWindowDimensions);
			console.log("cleanup");
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
