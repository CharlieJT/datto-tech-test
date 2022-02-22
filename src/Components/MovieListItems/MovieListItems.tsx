import { MovieListItem } from "./MovieListItem/MovieListItem";
import {
	MovieListItemsStyles,
	MovieListItemsHeaderStyles,
} from "./MovieListItemsStyles";

type MovieListItemsTypes = {
	data: any;
	listTitle: string;
	modalOpenHandler: (movie: any) => void;
};

export const MovieListItems = ({
	data,
	listTitle,
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
								modalOpenHandler={modalOpenHandler}
							/>
					  ))
					: "No Data Available"}
			</MovieListItemsStyles>
		</>
	);
};
