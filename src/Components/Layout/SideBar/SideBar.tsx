import { SideBarListItem } from "./SideBarListItem/SideBarListItem";
import { SideBarStyles, SideBarListStyles } from "./SideBarStyles";
import { dataList, ListItemProps } from "../../../utils";
import { BackDrop } from "../../UI";

type SideBarProps = {
	request: string;
	fetchDataHandler: (query: ListItemProps) => void;
	sideDrawerOpen: boolean;
	closeSideDrawerHandler: () => void;
};

const SideBar = ({
	request,
	fetchDataHandler,
	sideDrawerOpen,
	closeSideDrawerHandler,
}: SideBarProps): React.ReactElement => {
	return (
		<>
			<BackDrop
				open={sideDrawerOpen}
				close={closeSideDrawerHandler}
				zIndex={1}
			/>
			<SideBarStyles sideDrawerOpen={sideDrawerOpen}>
				<SideBarListStyles>
					{dataList.map(listItem => (
						<SideBarListItem
							key={listItem.id}
							listItem={listItem}
							request={request}
							fetchDataHandler={fetchDataHandler}
						/>
					))}
				</SideBarListStyles>
			</SideBarStyles>
		</>
	);
};

export { SideBar };
