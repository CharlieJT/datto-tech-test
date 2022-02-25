import styled from "styled-components";

export const MainStyles = styled.main`
	disply: flex;
	align-items: center;
	text-align: center;
	min-height: calc(100vh - 80px);
	padding: 2rem;
	background-color: #000;
	colour: #fff;
	transition: margin-left 0.2s ease-in;
	@media (min-width: 992px) {
		margin-left: calc(200px + 2rem);
	}
`;
