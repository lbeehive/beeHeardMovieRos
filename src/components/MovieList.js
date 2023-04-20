import React from 'react';

const MovieList = (props) => {
	const FavoriteComponent = props.favoriteComponent;

	return (
		<>
			{props.movieArray.map((movieArray, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.image} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movieArray)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavoriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
