import { MovieListItemStyles } from "./MovieListItemStyles";

type MovieListItemProps = {
	movie: any;
	modalOpenHandler: (movie: any) => void;
};

export const MovieListItem = ({
	movie,
	modalOpenHandler,
}: MovieListItemProps) => (
	<MovieListItemStyles onClick={() => modalOpenHandler(movie)}>
		<img src={movie.image} alt={movie.title} />
		<p>{movie.fullTitle}</p>
	</MovieListItemStyles>
);
