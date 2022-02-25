/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import { Header, SideBar, Main } from "./Components/Layout";
import { Modal } from "./Components/UI";
import { useAxiosRequest } from "./hooks";
import { dataList } from "./utils";

const App = (): React.ReactElement => {
	const {
		data,
		loading,
		error,
		listTitle,
		request,
		fetchDataHandler,
		removeMovieHandler,
		editMovieHandler,
		open,
		movieSelect,
		modalCloseHandler,
		modalOpenHandler,
		sideDrawerOpen,
		toggleSideDrawerHandler,
		closeSideDrawerHandler,
	} = useAxiosRequest();

	useEffect((): void => fetchDataHandler(dataList[0]), []);

	return (
		<>
			<Modal
				open={open}
				movieSelect={movieSelect}
				modalCloseHandler={modalCloseHandler}
				editMovieHandler={editMovieHandler}
			/>
			<Header
				sideDrawerOpen={sideDrawerOpen}
				toggleSideDrawerHandler={toggleSideDrawerHandler}
			/>
			<SideBar
				request={request}
				fetchDataHandler={fetchDataHandler}
				sideDrawerOpen={sideDrawerOpen}
				closeSideDrawerHandler={closeSideDrawerHandler}
			/>
			<Main
				data={data}
				loading={loading}
				listTitle={listTitle}
				error={error}
				removeMovieHandler={removeMovieHandler}
				modalOpenHandler={modalOpenHandler}
			/>
		</>
	);
};

export default App;
