import { ButtonStyles } from "./ButtonStyles";

type ButtonTypes = {
	children: React.ReactNode;
	buttonType: string;
	click?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
};

export const Button = ({
	children,
	buttonType,
	click,
	type,
}: ButtonTypes): React.ReactElement => (
	<ButtonStyles buttonType={buttonType} type={type} onClick={click}>
		{children}
	</ButtonStyles>
);
