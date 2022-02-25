import { useState } from "react";

type UseModalTypes = {
	open: boolean;
	movieSelect: any;
	modalOpenHandler: (movie: any) => void;
	modalCloseHandler: () => void;
};

export const useModal = (): UseModalTypes => {
	const [open, setOpen] = useState<boolean>(false);
	const [movieSelect, setMovieSelect] = useState({});

	const modalOpenHandler = (movie: any): void => {
		setMovieSelect(movie);
		setOpen(true);
	};
	const modalCloseHandler = (): void => {
		setMovieSelect({});
		setOpen(false);
	};
	return { open, movieSelect, modalOpenHandler, modalCloseHandler };
};
