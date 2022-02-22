/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import { Header, SideBar, Main, Modal } from "./Components";
import { useAxiosRequest } from "./hooks/useAxiosRequest";
import { dataList } from "./utils/dataList";
import { useModal } from "./hooks/useModal";

const App = (): React.ReactElement => {
	const { data, loading, error, listTitle, request, fetchDataHandler } =
		useAxiosRequest();
	const { open, movieSelect, modalOpenHandler, modalCloseHandler } = useModal();

	useEffect(() => fetchDataHandler(dataList[0]), []);

	return (
		<>
			<Modal
				open={open}
				movieSelect={movieSelect}
				modalCloseHandler={modalCloseHandler}
			/>
			<Header />
			<SideBar request={request} fetchDataHandler={fetchDataHandler} />
			<Main
				data={data}
				loading={loading}
				listTitle={listTitle}
				error={error}
				modalOpenHandler={modalOpenHandler}
			/>
		</>
	);
};

export default App;
