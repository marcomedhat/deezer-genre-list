import {GET_GENRES, GET_GENRE, RESET_GENRE} from './types';
import axios from 'axios';

export const getGenres = () => async dispatch => {
  const res = await axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/');
	dispatch({
			type: GET_GENRES,
			payload: res.data.data
		})
}

export const getGenre = (id) => async dispatch => {
	const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`);
	dispatch({
			type: GET_GENRE,
			payload: res.data.data
		})
}

export const resetGenre = () => dispatch => { 
	dispatch({
		type: RESET_GENRE
	})
}
