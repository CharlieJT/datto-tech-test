import { HeaderStyles } from "./HeaderStyles";
import MovieLogo from "../../../assets/movie-logo.png";

export const Header = (): React.ReactElement => {
	return (
		<HeaderStyles>
			<img src={MovieLogo} alt="Movie Logo" />
		</HeaderStyles>
	);
};
