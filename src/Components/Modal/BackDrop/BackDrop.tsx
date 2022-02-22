import styled from "styled-components";
import { ModalProps } from "../Modal";

const BackDropStyles = styled.div.attrs<ModalProps>(({ open }) => ({
	style: {
		display: !open && "none",
		backgroundColor: `rgb(0 0 0 / ${open ? "50%" : "0%"})`,
	},
}))<ModalProps>`
	position: fixed;
	z-index: 1;
	height: 100vh;
	width: 100vw;
	transition: all 1s ease-in;
`;

export const BackDrop = ({
	open,
	modalCloseHandler,
}: ModalProps): React.ReactElement => (
	<BackDropStyles open={open} onClick={modalCloseHandler}>
		BackDrop
	</BackDropStyles>
);
