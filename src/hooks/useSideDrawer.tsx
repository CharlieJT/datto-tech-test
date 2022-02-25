import { useState } from "react";

type UseSideDrawer = {
	sideDrawerOpen: boolean;
	toggleSideDrawerHandler: () => void;
	closeSideDrawerHandler: () => void;
	openSideDrawerHandler: () => void;
};

export const useSideDrawer = (): UseSideDrawer => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);
	const toggleSideDrawerHandler = (): void =>
		setSideDrawerOpen((sideDrawerOpen: boolean): boolean => !sideDrawerOpen);
	const closeSideDrawerHandler = (): void => setSideDrawerOpen(false);
	const openSideDrawerHandler = (): void => setSideDrawerOpen(true);
	return {
		sideDrawerOpen,
		toggleSideDrawerHandler,
		closeSideDrawerHandler,
		openSideDrawerHandler,
	};
};
