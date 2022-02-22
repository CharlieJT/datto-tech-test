import { ModalStyles } from "./ModalStyles";
import { BackDrop } from "./BackDrop/BackDrop";

type ModalProps = {
	open: boolean;
	movieSelect?: any;
	modalCloseHandler?: () => void;
};

const Modal: React.FC<ModalProps> = ({
	open,
	movieSelect,
	modalCloseHandler,
}): React.ReactElement => {
	return (
		<>
			<BackDrop open={open} modalCloseHandler={modalCloseHandler} />
			<ModalStyles open={open}>
				{movieSelect && (
					<>
						<img src={movieSelect.image} alt={movieSelect.title} />
						<h2>{movieSelect.fullTitle}</h2>
					</>
				)}
			</ModalStyles>
		</>
	);
};

export { Modal };
export type { ModalProps };
