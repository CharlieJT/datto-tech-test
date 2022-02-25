import styled from "styled-components";

type SideBarProps = {
	sideDrawerOpen?: boolean;
};

const SideBarStyles = styled.aside.attrs<SideBarProps>(
	({ sideDrawerOpen }) => ({
		style: {
			transform: `translate(-${sideDrawerOpen ? 0 : 100}%, 0)`,
		},
	}),
)<SideBarProps>`
	position: fixed;
	height: calc(100vh - 80px);
	width: 80%;
	max-width: 200px;
	background-color: #131313;
	padding: 1rem;
	transition: transform 0.2s ease-in;
	z-index: 1;
	@media (min-width: 992px) {
		transform: translate(0, 0) !important;
	}
`;

const SideBarListStyles = styled.ul`
	padding: 0;
	margin-top: 2rem;
`;

export { SideBarStyles, SideBarListStyles };
