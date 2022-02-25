import { MainStyles } from "./MainStyles";
import { Loader } from "../../UI";
import { MovieListItems } from "../../MovieListItems/MovieListItems";

type MainTypes = {
	data: any;
	loading: boolean;
	listTitle: string;
	error: any;
	removeMovieHandler: (movie: any) => void;
	modalOpenHandler: (movie: any) => void;
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
