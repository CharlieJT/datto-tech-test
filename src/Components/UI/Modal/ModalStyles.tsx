import styled from "styled-components";
import { ModalProps } from "..";

const ModalStyles = styled.div.attrs<ModalProps>(({ open }) => ({
	style: {
		display: !open && "none",
		opacity: !open && 0,
	},
}))<ModalProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	background-color: #131313;
	color: #fff;
	width: 80%;
	max-width: 500px;
	min-height: 400px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	padding: 2rem;
`;

const ModalImageStyles = styled.img`
	width: 200px;
`;

const FormStyles = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;

const InputStyles = styled.input`
	margin-top: 2rem;
	background-color: #000;
	color: #fff;
	font-size: 1rem;
	border: 1px solid grey;
	padding: 0.3rem;
	border-radius: 0.3rem;
	width: 80%;
`;

export { ModalStyles, ModalImageStyles, FormStyles, InputStyles };
