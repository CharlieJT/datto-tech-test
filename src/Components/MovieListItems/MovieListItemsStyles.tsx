import styled from "styled-components";

const MovieListItemsStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	width: 100%;
	@media (min-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}
`;

const MovieListItemsHeaderStyles = styled.h2`
	color: #fff;
	margin: 2rem 1rem;
	text-align: left;
`;

export { MovieListItemsStyles, MovieListItemsHeaderStyles };
