import styled from "styled-components";

type ButtonStyleProps = {
	buttonType?: string;
};

export const ButtonStyles = styled.button.attrs<ButtonStyleProps>(
	({ buttonType }) => ({
		style: {
			backgroundColor:
				buttonType === "danger"
					? "red"
					: buttonType === "success"
					? "#4d931f"
					: "grey",
		},
	}),
)<ButtonStyleProps>`
	display: inline-flex;
	gap: 0.2rem;
	color: #fff;
	border: none;
	margin: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	cursor: pointer;
`;
