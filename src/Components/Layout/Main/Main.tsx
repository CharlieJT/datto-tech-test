import { MainStyles } from "./MainStyles";
import { Loader } from "../../UI";
import { MovieListItems } from "../../MovieListItems/MovieListItems";
import { MoviesProps, MovieProps } from "../../../utils";

type MainTypes = {
	data: MoviesProps;
	loading: boolean;
	listTitle: string;
	error: any;
	removeMovieHandler: (movie: MovieProps) => void;
	modalOpenHandler: (movie: MovieProps) => void;
};

const Main = ({
	data,
	loading,
	listTitle,
	error,
	removeMovieHandler,
	modalOpenHandler,
}: MainTypes): React.ReactElement => {
	let output: string | React.ReactElement = "This is the Output";
	if (loading) {
		output = <Loader />;
	} else if (error) {
		output = error?.message ?? "An Error has occured";
	} else {
		output = data && (
			<MovieListItems
				data={data}
				listTitle={listTitle}
				removeMovieHandler={removeMovieHandler}
				modalOpenHandler={modalOpenHandler}
			/>
		);
	}
	return <MainStyles>{output}</MainStyles>;
};

export { Main };
export type { MainTypes };
