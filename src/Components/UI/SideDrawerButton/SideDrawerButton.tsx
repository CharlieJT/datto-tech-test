import {
	SideDrawerButtonStyles,
	SideDrawerBurgerStyles,
	BurgerSegment,
} from "./SideDrawerButtonStyles";

type SideDrawerButtonProps = {
	sideDrawerOpen: boolean;
	toggle: () => void;
};

export const SideDrawerButton = ({
	sideDrawerOpen,
	toggle,
}: SideDrawerButtonProps): React.ReactElement => {
	return (
		<SideDrawerButtonStyles>
			<SideDrawerBurgerStyles onClick={toggle}>
				<BurgerSegment
					visible={true}
					sideDrawerOpen={sideDrawerOpen}
					rotate="-45deg"
					translateX="-6px"
					translateY="6px"
				/>
				<BurgerSegment
					visible={!sideDrawerOpen}
					sideDrawerOpen={sideDrawerOpen}
					rotate="0deg"
					translateX="0"
					translateY="0"
				/>
				<BurgerSegment
					visible={true}
					sideDrawerOpen={sideDrawerOpen}
					rotate="45deg"
					translateX="-6px"
					translateY="-6px"
				/>
			</SideDrawerBurgerStyles>
		</SideDrawerButtonStyles>
	);
};
