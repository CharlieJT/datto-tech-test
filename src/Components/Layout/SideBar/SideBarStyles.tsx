import styled from "styled-components";

export const SideBarStyles = styled.aside`
	position: fixed;
	disply: flex;
	align-items: center;
	height: calc(100vh - 80px);
	width: 80%;
	max-width: 200px;
	background-color: #131313;
	padding: 1rem;
	& > ul {
		padding: 0;
	}
`;
