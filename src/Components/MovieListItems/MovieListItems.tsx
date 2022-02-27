import { MovieListItem } from "./MovieListItem/MovieListItem";
import {
	MovieListItemsStyles,
	MovieListItemsHeaderStyles,
} from "./MovieListItemsStyles";
import { MoviesProps, MovieProps } from "../../utils";

type MovieListItemsTypes = {
	data: MoviesProps;
	listTitle: string;
	removeMovieHandler: (movie: MovieProps) => void;
	modalOpenHandler: (movie: MovieProps) => void;
};

export const MovieListItems = ({
	data,
	listTitle,
	removeMovieHandler,
	modalOpenHandler,
}: MovieListItemsTypes): React.ReactElement => {
	return (
		<>
			<MovieListItemsHeaderStyles>{listTitle}</MovieListItemsHeaderStyles>
			<MovieListItemsStyles>
				{data
					? data?.map(
							(movie: MovieProps): JSX.Element => (
								<MovieListItem
									key={movie.id}
									movie={movie}
									removeMovieHandler={removeMovieHandler}
									modalOpenHandler={modalOpenHandler}
								/>
							),
					  )
					: "No Data Available"}
			</MovieListItemsStyles>
		</>
	);
};
