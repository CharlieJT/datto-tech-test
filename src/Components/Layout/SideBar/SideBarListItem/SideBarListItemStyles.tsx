import styled from "styled-components";

const SideBarListItemStyles = styled.li`
	list-style-type: none;
	cursor: pointer;
	& > a {
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

const SideBarListItemLinkStyles = styled.a`
	text-decoration: none;
	color: #7d7d7d;
	&:hover {
		text-decoration: underline;
	}
`;

const SideBarListItemLinkActiveStyles = styled.a`
	color: #fff;
	font-weight: bold;
	text-decoration: none;
	&:hover {
		text-decoration: none !important;
	}
`;

export {
	SideBarListItemStyles,
	SideBarListItemLinkStyles,
	SideBarListItemLinkActiveStyles,
};
