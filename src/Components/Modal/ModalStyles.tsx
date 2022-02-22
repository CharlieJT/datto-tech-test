import styled from "styled-components";
import { ModalProps } from "./Modal";

export const ModalStyles = styled.div.attrs<ModalProps>(({ open }) => ({
	style: {
		display: !open && "none",
		opacity: !open && 0,
	},
}))<ModalProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #131313;
	color: #fff;
	width: 80%;
	height: 50%;
	max-width: 500px;
	min-height: 400px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	& > img {
		width: 200px;
	}
`;
