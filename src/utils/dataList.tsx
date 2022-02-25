type ListItemProps = {
	id: number;
	title: string;
	query: string;
};

type TestDataProps = {
	crew: string;
	fullTitle: string;
	id: string;
	imDbRating: string;
	imDbRatingCount: string;
	image: string;
	rank: string;
	title: string;
	year: string;
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

const testData: TestDataProps[] = [
	{
		crew: "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
		fullTitle: "The Shawshank Redemption (1994)",
		id: "tt0111161",
		imDbRating: "9.2",
		imDbRatingCount: "2549691",
		image:
			"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
		rank: "1",
		title: "The Shawshank Redemption",
		year: "1994",
	},

	{
		crew: "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
		fullTitle: "The Godfather (1972)",
		id: "tt0068646",
		imDbRating: "9.1",
		imDbRatingCount: "1753710",
		image:
			"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
		rank: "2",
		title: "The Godfather",
		year: "1972",
	},
	{
		crew: "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
		fullTitle: "The Godfather: Part II (1974)",
		id: "tt0071562",
		imDbRating: "9.0",
		imDbRatingCount: "1216095",
		image:
			"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
		rank: "3",
		title: "The Godfather: Part II",
		year: "1974",
	},
	{
		crew: "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
		fullTitle: "The Dark Knight (2008)",
		id: "tt0468569",
		imDbRating: "9.0",
		imDbRatingCount: "2500221",
		image:
			"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
		rank: "4",
		title: "The Dark Knight",
		year: "2008",
	},
	{
		crew: "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
		fullTitle: "12 Angry Men (1957)",
		id: "tt0050083",
		imDbRating: "8.9",
		imDbRatingCount: "753514",
		image:
			"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
		rank: "5",
		title: "12 Angry Men",
		year: "1957",
	},
	{
		crew: "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
		fullTitle: "Schindler's List (1993)",
		id: "tt0108052",
		imDbRating: "8.9",
		imDbRatingCount: "1301234",
		image:
			"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
		rank: "6",
		title: "Schindler's List",
		year: "1993",
	},
	{
		crew: "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
		fullTitle: "The Lord of the Rings: The Return of the King (2003)",
		id: "tt0167260",
		imDbRating: "8.9",
		imDbRatingCount: "1757352",
		image:
			"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
		rank: "7",
		title: "The Lord of the Rings: The Return of the King",
		year: "2003",
	},
	{
		crew: "Quentin Tarantino (dir.), John Travolta, Uma Thurman",
		fullTitle: "Pulp Fiction (1994)",
		id: "tt0110912",
		imDbRating: "8.8",
		imDbRatingCount: "1960638",
		image:
			"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
		rank: "8",
		title: "Pulp Fiction",
		year: "1994",
	},
];

export { dataList, testData };
export type { ListItemProps };
