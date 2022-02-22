import { SideBarListItem } from "./SideBarListItem/SideBarListItem";
import { SideBarStyles } from "./SideBarStyles";
import { dataList, ListItemProps } from "../../../utils/dataList";

type SideBarProps = {
	request: string;
	fetchDataHandler: (query: ListItemProps) => void;
};

const SideBar = ({
	request,
	fetchDataHandler,
}: SideBarProps): React.ReactElement => {
	return (
		<SideBarStyles>
			<ul>
				{dataList.map(listItem => (
					<SideBarListItem
						key={listItem.id}
						listItem={listItem}
						request={request}
						fetchDataHandler={fetchDataHandler}
					/>
				))}
			</ul>
		</SideBarStyles>
	);
};

export { SideBar };
