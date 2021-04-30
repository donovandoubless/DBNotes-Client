import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
.sidebar-component, .topbar-component {
	background-color: ${({ theme }) => theme.bar};
}
.notes-component{
	background-color: ${({ theme }) => theme.notes};

	.notecard-component{
		.note-title{
			background-color: ${({ theme }) => theme.cardTitle};
		}

		.note-content{
			background-color: ${({ theme }) => theme.cardContent};
		}
	}
}

.modal-component{
	.modal{
		.modal-title{
			background-color: ${({ theme }) => theme.cardTitle};
		}

		.modal-content{
			background-color: ${({ theme }) => theme.modalContent};
		}
	}
}

`;

export const lightTheme = {
	body: "radial-gradient(ellipse at bottom, #00f2fe 0%, #4facfe 100%)",
	text: "#000",
	bar: "rgba(255, 255, 255, 0.4)",
	notes: "rgba(255, 255, 255, 0.2);",
	cardTitle: "#fff",
	cardContent: "rgba(225, 225, 225, 0.5)",
	modalContent: "rgb(245, 245, 245)",
};

export const darkTheme = {
	body: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
	text: "#fff",
	bar: "rgba(27, 39, 53, 0.4)",
	notes: "rgba(35, 64, 83, 0.4)",
	cardTitle: "rgba(29, 40, 65, 1)",
	cardContent: "rgba(38, 51, 82, 0.5)",
	modalContent: "rgb(38, 51, 82)",
};
