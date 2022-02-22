type ListItemProps = {
	id: number;
	title: string;
	query: string;
};

const dataList: ListItemProps[] = [
	{ id: 1, title: "Top 250 Movies", query: "Top250Movies" },
	{ id: 2, title: "Top 250 TVs", query: "Top250TVs" },
	{ id: 3, title: "Most Popular Movies", query: "MostPopularMovies" },
	{ id: 4, title: "Most Popular TVs", query: "MostPopularTVs" },
	{ id: 5, title: "In Theaters", query: "InTheaters" },
	{ id: 6, title: "Coming Soon", query: "ComingSoon" },
	{ id: 7, title: "Box Office", query: "BoxOffice" },
	{ id: 8, title: "Box Office All Time", query: "BoxOfficeAllTime" },
];

export { dataList };
export type { ListItemProps };
