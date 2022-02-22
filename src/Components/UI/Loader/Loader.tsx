import styled, { keyframes } from "styled-components";

const LoaderContainerStyles = styled.div`
	display: flex;
	justify-content: center;
`;

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyles = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	&:after {
		content: " ";
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: ${spinning} 1.2s linear infinite;
	}
`;

export const Loader = (): React.ReactElement => {
	return (
		<LoaderContainerStyles>
			<LoaderStyles />
		</LoaderContainerStyles>
	);
};
