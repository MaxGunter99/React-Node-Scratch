import {
	FETCH_VIDEO_GAMES_START,
	FETCH_VIDEO_GAMES_SUCCESS,
	FETCH_VIDEO_GAMES_FAILURE,
	FETCH_VIDEO_GAME_START,
	FETCH_VIDEO_GAME_SUCCESS,
	FETCH_VIDEO_GAME_FAILURE,
} from "../actions/videoGameActions";

const initialState = {
	fetchingVideoGames: true,
	videoGames: [],
	videoGameViewData: null,
	error: null,
};

export const videoGameReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VIDEO_GAMES_START:
			return {
				...state,
				fetchingVideoGames: true,
				videoGames: [],
				videoGameViewData: null,
				error: null,
			};

		case FETCH_VIDEO_GAMES_SUCCESS:
			return {
				...state,
				fetchingVideoGames: false,
				videoGames: action.payload,
				videoGameViewData: null,
				error: null,
			};

		case FETCH_VIDEO_GAMES_FAILURE:
			return {
				...state,
				fetchingVideoGames: false,
				videoGames: [],
				videoGameViewData: null,
				error: action.payload,
			};

		case FETCH_VIDEO_GAME_START:
			return {
				...state,
				fetchingVideoGames: true,
				videoGames: [],
				videoGameViewData: null,
				error: null,
			};

		case FETCH_VIDEO_GAME_SUCCESS:
			return {
				...state,
				fetchingVideoGames: false,
				videoGames: [],
				videoGameViewData: action.payload,
				error: null,
			};

		case FETCH_VIDEO_GAME_FAILURE:
			return {
				...state,
				fetchingVideoGames: false,
				videoGames: [],
				videoGameViewData: null,
				error: action.payload,
			};

		default:
			return state;
	}
};
