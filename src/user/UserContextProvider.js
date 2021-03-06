import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = (props) => {
	const [user, setUser] = useState("");

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_USER}`, {
				withCredentials: true,
			})
			.then((res) => {
				if (res.data) {
					setUser(res.data);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<UserContext.Provider value={{ user }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
