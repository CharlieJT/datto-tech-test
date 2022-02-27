import { MovieListItemStyles } from "./MovieListItemStyles";
import { Button } from "../../UI/Button/Button";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { MovieProps } from "../../../utils";

type MovieListItemProps = {
	movie: MovieProps;
	removeMovieHandler: (movie: MovieProps) => void;
	modalOpenHandler: (movie: MovieProps) => void;
};

export const MovieListItem = ({
	movie,
	removeMovieHandler,
	modalOpenHandler,
}: MovieListItemProps): React.ReactElement => (
	<MovieListItemStyles>
		<img src={movie.image} alt={movie.title} />
		<p>{movie.fullTitle}</p>
		<Button buttonType="edit" click={(): void => modalOpenHandler(movie)}>
			Edit <AiFillEdit />
		</Button>
		<Button buttonType="danger" click={(): void => removeMovieHandler(movie)}>
			Delete <MdDeleteForever />
		</Button>
	</MovieListItemStyles>
);
