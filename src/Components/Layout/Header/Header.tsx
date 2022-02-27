import { HeaderStyles, HeaderLogoStyles } from "./HeaderStyles";
import MovieLogo from "../../../assets/movie-logo.png";
import { SideDrawerButton } from "../../UI";

type HeaderProps = {
	open: boolean;
	modalCloseHandler: () => void;
	sideDrawerOpen: boolean;
	toggleSideDrawerHandler: () => void;
};

export const Header = ({
	open,
	modalCloseHandler,
	sideDrawerOpen,
	toggleSideDrawerHandler,
}: HeaderProps): React.ReactElement => {
	const toggleSideDrawer = (): void => {
		if (open) {
			modalCloseHandler();
		}
		toggleSideDrawerHandler();
	};
	return (
		<HeaderStyles>
			<HeaderLogoStyles src={MovieLogo} alt="Movie Logo" />
			<SideDrawerButton
				sideDrawerOpen={sideDrawerOpen}
				toggle={toggleSideDrawer}
			/>
		</HeaderStyles>
	);
};
