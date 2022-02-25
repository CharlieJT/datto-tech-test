import { BackDropStyles } from "./BackDropStyles";

type BackDropProps = {
	open: boolean;
	close?: () => void;
	zIndex?: number;
};

export const BackDrop = ({
	open,
	close,
	zIndex,
}: BackDropProps): React.ReactElement => (
	<BackDropStyles open={open} onClick={close} zIndex={zIndex}>
		BackDrop
	</BackDropStyles>
);
