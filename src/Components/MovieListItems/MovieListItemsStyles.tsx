import styled from "styled-components";

const MovieListItemsStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
`;

const MovieListItemsHeaderStyles = styled.h2`
	color: #fff;
	margin: 2rem 1rem;
	text-align: left;
`;

export { MovieListItemsStyles, MovieListItemsHeaderStyles };
