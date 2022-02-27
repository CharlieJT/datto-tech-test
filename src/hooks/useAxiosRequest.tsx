import { useState, useCallback } from "react";
import axios from "axios";
import { ListItemProps } from "../utils";
import { useModal, useSideDrawer } from ".";
import { MoviesProps, MovieProps } from "../utils";

type UseAxiosRequestTypes = {
	data: MoviesProps;
	loading: boolean;
	error: string;
	listTitle: string;
	request: string;
	fetchDataHandler: (listItem: ListItemProps) => void;
	removeMovieHandler: (movie: MovieProps) => void;
	editMovieHandler: (id: string, movie: string) => void;
	open: boolean;
	movieSelect: MovieProps;
	modalCloseHandler: () => void;
	modalOpenHandler: (movie: MovieProps) => void;
	sideDrawerOpen: boolean;
	toggleSideDrawerHandler: () => void;
	closeSideDrawerHandler: () => void;
};

type ResponseProps = { data: { items: MoviesProps } };

export const useAxiosRequest = (): UseAxiosRequestTypes => {
	const { open, movieSelect, modalCloseHandler, modalOpenHandler } = useModal();
	const { sideDrawerOpen, toggleSideDrawerHandler, closeSideDrawerHandler } =
		useSideDrawer();
	const [data, setData] = useState<MoviesProps>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");
	const [request, setRequest] = useState<string>("");
	const [listTitle, setListTitle] = useState<string>("");
	const fetchDataHandler = useCallback(
		(listItem: ListItemProps): void => {
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
				.then((res: ResponseProps): void => {
					const data: any = res.data.items;
					setData(data);
					setLoading(false);
				})
				.catch(err => {
					setLoading(false);
					setError(err.message);
				});
		},
		[closeSideDrawerHandler, error],
	);
	const removeMovieHandler = useCallback(
		(selectedMovie: MovieProps): void => {
			const filteredData = data.filter(
				(movie: MovieProps): boolean => movie.id !== selectedMovie.id,
			);
			setData(filteredData);
		},
		[data],
	);
	const editMovieHandler = useCallback(
		(id: string, newMovieTitle: string): void => {
			const currentMovieList: any = [...data];
			const findMovieIndex: any = currentMovieList.findIndex(
				(movie: MovieProps): boolean => movie.id === id,
			);
			currentMovieList[findMovieIndex] = {
				...currentMovieList[findMovieIndex],
				fullTitle: newMovieTitle,
			};
			setData(currentMovieList);
		},
		[data],
	);
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
