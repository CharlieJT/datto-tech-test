import { MovieListItem } from "./MovieListItem/MovieListItem";
import {
	MovieListItemsStyles,
	MovieListItemsHeaderStyles,
} from "./MovieListItemsStyles";

type MovieListItemsTypes = {
	data: any;
	listTitle: string;
	removeMovieHandler: (movie: any) => void;
	modalOpenHandler: (movie: any) => void;
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
					? data?.map((movie: any) => (
							<MovieListItem
								key={movie.id}
								movie={movie}
								removeMovieHandler={removeMovieHandler}
								modalOpenHandler={modalOpenHandler}
							/>
					  ))
					: "No Data Available"}
			</MovieListItemsStyles>
		</>
	);
};
