import { MainStyles } from "./MainStyles";
import { Loader } from "../../UI/Loader/Loader";
import { MovieListItems } from "../../MovieListItems/MovieListItems";

type MainTypes = {
	data: any;
	loading: boolean;
	listTitle: string;
	error: any;
	modalOpenHandler: (movie: any) => void;
};

const Main = ({
	data,
	loading,
	listTitle,
	error,
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
				modalOpenHandler={modalOpenHandler}
			/>
		);
	}
	return <MainStyles>{output}</MainStyles>;
};

export { Main };
export type { MainTypes };
