import { HeaderStyles, HeaderLogoStyles } from "./HeaderStyles";
import MovieLogo from "../../../assets/movie-logo.png";
import { SideDrawerButton } from "../../UI";

type HeaderProps = {
	sideDrawerOpen: boolean;
	toggleSideDrawerHandler: () => void;
};

export const Header = ({
	sideDrawerOpen,
	toggleSideDrawerHandler,
}: HeaderProps): React.ReactElement => {
	return (
		<HeaderStyles>
			<HeaderLogoStyles src={MovieLogo} alt="Movie Logo" />
			<SideDrawerButton
				sideDrawerOpen={sideDrawerOpen}
				toggle={toggleSideDrawerHandler}
			/>
		</HeaderStyles>
	);
};
