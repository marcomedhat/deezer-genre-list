import {GET_GENRES, GET_GENRE, RESET_GENRE} from '../actions/types';

const initialState = {
	genres: [],
	genre: []
};

export default function(state = initialState, action){
	switch(action.type) {
		case GET_GENRES:
			return {
				...state,
				genres: action.payload
      };
    case GET_GENRE:
      return {
        ...state,
        genre: action.payload
      }
    case RESET_GENRE:
      return {
        ...state,
        genre: []
      }
    default:
      return state;
  }
}