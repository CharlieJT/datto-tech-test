import styled from "styled-components";

type BackDropProps = {
	open: boolean;
	zIndex?: number;
};

export const BackDropStyles = styled.div.attrs<BackDropProps>(
	({ open, zIndex }) => ({
		style: {
			opacity: !open ? "0" : "1",
			pointerEvents: !open ? "none" : "all",
			zIndex: zIndex,
		},
	}),
)<BackDropProps>`
	position: fixed;
	height: 100vh;
	width: 100vw;
	transition: opacity 0.2s ease-in;
	background-color: rgb(0, 0, 0, 0.5);
`;
