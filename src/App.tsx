/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
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
			{useMemo(
				(): JSX.Element => (
					<Modal
						open={open}
						movieSelect={movieSelect}
						modalCloseHandler={modalCloseHandler}
						editMovieHandler={editMovieHandler}
					/>
				),
				[open, movieSelect],
			)}
			{useMemo(
				(): JSX.Element => (
					<Header
						open={open}
						modalCloseHandler={modalCloseHandler}
						sideDrawerOpen={sideDrawerOpen}
						toggleSideDrawerHandler={toggleSideDrawerHandler}
					/>
				),
				[open, sideDrawerOpen],
			)}
			{useMemo(
				(): JSX.Element => (
					<SideBar
						request={request}
						fetchDataHandler={fetchDataHandler}
						sideDrawerOpen={sideDrawerOpen}
						closeSideDrawerHandler={closeSideDrawerHandler}
					/>
				),
				[request, sideDrawerOpen],
			)}
			{useMemo(
				(): JSX.Element => (
					<Main
						data={data}
						loading={loading}
						listTitle={listTitle}
						error={error}
						removeMovieHandler={removeMovieHandler}
						modalOpenHandler={modalOpenHandler}
					/>
				),
				[data, loading, listTitle, error],
			)}
		</>
	);
};

export default App;
