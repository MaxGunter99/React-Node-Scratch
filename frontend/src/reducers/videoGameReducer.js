import {
	FETCH_VIDEO_GAMES_START,
	FETCH_VIDEO_GAMES_SUCCESS,
	FETCH_VIDEO_GAMES_FAILURE,
} from "../actions/videoGameActions";

const initialState = {
	fetchingVideoGames: true,
	videoGames: [],
	error: null,
};

export const videoGameReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VIDEO_GAMES_START:
			return {
				...state,
				fetchingVideoGames: true,
				videoGames: [],
				error: null,
			};

		case FETCH_VIDEO_GAMES_SUCCESS:
			return {
				...state,
				fetchingVideoGames: false,
				videoGames: action.payload,
				error: null,
			};

		case FETCH_VIDEO_GAMES_FAILURE:
			return {
				...state,
				fetchingVideoGames: false,
				videoGames: [],
				error: action.payload,
			};

		default:
			return state;
	}
};
