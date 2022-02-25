import { SetStateAction, useState, createRef, useEffect } from "react";
import {
	ModalStyles,
	ModalImageStyles,
	FormStyles,
	InputStyles,
} from "./ModalStyles";
import { Button, BackDrop } from "..";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";

type ModalProps = {
	open: boolean;
	movieSelect?: any;
	modalCloseHandler?: any;
	editMovieHandler?: any;
};

const Modal: React.FC<ModalProps> = ({
	open,
	movieSelect,
	modalCloseHandler,
	editMovieHandler,
}): React.ReactElement => {
	const [titleInput, setTitleInput] = useState<string>("");
	const InputRef: React.RefObject<HTMLInputElement> = createRef();
	const { image, title, fullTitle } = movieSelect;
	const onInputChangeHandler = (e: {
		target: { value: SetStateAction<string> };
	}): void => {
		setTitleInput(e.target.value);
	};
	const editSubmitHandler = (e: { preventDefault: () => void }): void => {
		e.preventDefault();
		modalCloseHandler();
		if (titleInput !== "") {
			editMovieHandler(movieSelect.id, titleInput);
			setTitleInput("");
		}
	};
	const closeHandler = (): void => {
		modalCloseHandler();
	};
	useEffect((): void => {
		if (open) {
			InputRef.current?.focus();
		} else {
			InputRef.current?.blur();
		}
	}, [InputRef, open]);
	return (
		<>
			<BackDrop open={open} close={closeHandler} zIndex={2} />
			<ModalStyles open={open}>
				{movieSelect && open && (
					<>
						<ModalImageStyles src={image} alt={title} />
						<FormStyles onSubmit={editSubmitHandler}>
							<InputStyles
								ref={InputRef}
								type="text"
								defaultValue={fullTitle}
								onChange={onInputChangeHandler}
							/>
							<span>
								<Button buttonType="success" type="submit">
									Done <MdOutlineDone />
								</Button>
								<Button buttonType="danger" type="button" click={closeHandler}>
									Cancel <ImCancelCircle />
								</Button>
							</span>
						</FormStyles>
					</>
				)}
			</ModalStyles>
		</>
	);
};

export { Modal };
export type { ModalProps };
