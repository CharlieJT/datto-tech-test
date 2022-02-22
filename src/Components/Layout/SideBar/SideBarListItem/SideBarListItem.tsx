import { ListItemProps } from "../../../../utils/dataList";
import {
	SideBarListItemStyles,
	SideBarListItemLinkStyles,
	SideBarListItemLinkActiveStyles,
} from "./SideBarListItemStyles";

type SideBarListItemProps = {
	listItem: ListItemProps;
	request: string;
	fetchDataHandler: (query: ListItemProps) => void;
};

export const SideBarListItem = ({
	listItem,
	request,
	fetchDataHandler,
}: SideBarListItemProps): React.ReactElement => {
	const { id, query, title } = listItem;
	return (
		<SideBarListItemStyles key={id}>
			{query === request ? (
				<SideBarListItemLinkActiveStyles>
					{title}
				</SideBarListItemLinkActiveStyles>
			) : (
				<SideBarListItemLinkStyles onClick={() => fetchDataHandler(listItem)}>
					{title}
				</SideBarListItemLinkStyles>
			)}
		</SideBarListItemStyles>
	);
};
