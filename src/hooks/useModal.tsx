import { useState } from "react";
import { MovieProps } from "../utils";

type UseModalTypes = {
	open: boolean;
	movieSelect: any;
	modalOpenHandler: (movie: MovieProps) => void;
	modalCloseHandler: () => void;
};

export const useModal = (): UseModalTypes => {
	const [open, setOpen] = useState<boolean>(false);
	const [movieSelect, setMovieSelect] = useState<MovieProps | {}>({});

	const modalOpenHandler = (movie: MovieProps): void => {
		setMovieSelect(movie);
		setOpen(true);
	};
	const modalCloseHandler = (): void => {
		setMovieSelect({});
		setOpen(false);
	};
	return { open, movieSelect, modalOpenHandler, modalCloseHandler };
};
