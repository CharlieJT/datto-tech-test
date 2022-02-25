import styled from "styled-components";

const HeaderStyles = styled.header`
	display: flex;
	position: sticky;
	top: 0;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	z-index: 10;
	background-color: #fff;
`;

const HeaderLogoStyles = styled.img`
	height: 100%;
	padding: 0.5rem;
	box-sizing: border-box;
	transition: padding 0.2s ease-in;
	@media (min-width: 992px) {
		padding: 0;
	}
`;

export { HeaderStyles, HeaderLogoStyles };
