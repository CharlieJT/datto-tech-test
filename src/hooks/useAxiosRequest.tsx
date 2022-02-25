import { useState } from "react";
import axios from "axios";
import { ListItemProps } from "../utils";
import { useModal, useSideDrawer } from ".";

type UseAxiosRequestTypes = {
	data: any;
	loading: boolean;
	error: string;
	listTitle: string;
	request: string;
	fetchDataHandler: (listItem: ListItemProps) => void;
	removeMovieHandler: (movie: any) => void;
	editMovieHandler: (id: string, movie: any) => void;
	open: boolean;
	movieSelect: any;
	modalCloseHandler: () => void;
	modalOpenHandler: (movie: any) => void;
	sideDrawerOpen: boolean;
	toggleSideDrawerHandler: () => void;
	closeSideDrawerHandler: () => void;
};

export const useAxiosRequest = (): UseAxiosRequestTypes => {
	const { open, movieSelect, modalCloseHandler, modalOpenHandler } = useModal();
	const { sideDrawerOpen, toggleSideDrawerHandler, closeSideDrawerHandler } =
		useSideDrawer();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [request, setRequest] = useState<string>("");
	const [listTitle, setListTitle] = useState<string>("");
	const fetchDataHandler = (listItem: ListItemProps): void => {
		const { query, title } = listItem;
		setLoading(true);
		setData([]);
		setRequest(query);
		setListTitle(title);
		closeSideDrawerHandler();
		if (error) {
			setError("");
		}
		axios
			.get(
				`${process.env.REACT_APP_BASE_URL}/${listItem.query}/${process.env.REACT_APP_API_KEY}`,
			)
			.then((res: any): any => {
				const data: any = res.data;
				setData(data.items);
				setLoading(false);
			})
			.catch(err => {
				setLoading(false);
				setError(err.message);
			});
	};
	const removeMovieHandler = (selectedMovie: any): void => {
		const filteredData = data.filter(
			(movie: any): boolean => movie.id !== selectedMovie.id,
		);
		setData(filteredData);
	};
	const editMovieHandler = (id: string, newMovieTitle: string): void => {
		const currentMovieList: any = [...data];
		const findMovieIndex: any = currentMovieList.findIndex(
			(movie: any): boolean => movie.id === id,
		);
		currentMovieList[findMovieIndex] = {
			...currentMovieList[findMovieIndex],
			fullTitle: newMovieTitle,
		};
		setData(currentMovieList);
	};
	return {
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
	};
};
