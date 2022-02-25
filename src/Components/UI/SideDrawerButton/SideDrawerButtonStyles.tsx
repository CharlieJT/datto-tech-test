import styled from "styled-components";

type BurgerSegmentProps = {
	visible?: boolean;
	sideDrawerOpen?: boolean;
	rotate?: string;
	translateX?: string;
	translateY?: string;
};

const SideDrawerButtonStyles = styled.div`
	width: 90px;
	height: 100%;
	padding: 0.5rem;
	box-sizing: border-box;
	@media (min-width: 992px) {
		display: none;
	}
`;

const SideDrawerBurgerStyles = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4.5px;
	background-color: #fff;
	height: 100%;
	width: 100%;
	border: none;
	cursor: pointer;
`;

const BurgerSegment = styled.div.attrs<BurgerSegmentProps>(
	({ visible, sideDrawerOpen, rotate, translateX, translateY }) => ({
		style: {
			opacity: visible ? 1 : 0,
			transform: `rotate(${sideDrawerOpen ? rotate : 0}) translate(${
				sideDrawerOpen ? translateX : 0
			}, ${sideDrawerOpen ? translateY : 0})`,
		},
	}),
)<BurgerSegmentProps>`
	background-color: #000;
	width: 30px;
	height: 4px;
	border-radius: 4px;
	margin: 0 auto;
	transition: all 0.2s ease-in;
`;

export { SideDrawerButtonStyles, SideDrawerBurgerStyles, BurgerSegment };
