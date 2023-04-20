import React, { useState, useEffect } from 'react';
//import {connect} from 'react-redux';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavorites from './AddFavorites';
import RemoveFavorites from './RemoveFavorites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const movieStore = {movieArray};

		const response = await fetch(movieStore);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('movieros-favorites')
		);

		if (movieFavorites) {
			setFavorites(movieFavorites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('movieros-favorites', JSON.stringify(items));
	};

	const addFavoriteMovie = (movie) => {
		const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => image.number !== image.number
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

	return (
  <div>
    < Header />
  
  <main>
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Featured Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={moviesArray}
					handleFavoritesClick={addFavoriteMovie}
					favoriteComponent={AddFavorites}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favorites' />
			</div>
			<div className='row'>
				<MovieList
					movies={movieArray}
					handleFavoritesClick={removeFavoriteMovie}
					favoriteComponent={RemoveFavorites}
				/>
			</div>
		</div>
</main>
<Footer />
</div>
);
};

export default App;