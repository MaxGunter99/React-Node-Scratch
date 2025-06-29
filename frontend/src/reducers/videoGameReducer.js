import {
	FETCH_VIDEO_GAMES_START,
	FETCH_VIDEO_GAMES_SUCCESS,
	FETCH_VIDEO_GAMES_FAILURE,
	FETCH_VIDEO_GAME_START,
	FETCH_VIDEO_GAME_SUCCESS,
	FETCH_VIDEO_GAME_FAILURE,
	UPDATE_VIDEO_GAME_START,
	UPDATE_VIDEO_GAME_SUCCESS,
	UPDATE_VIDEO_GAME_FAILURE,
	ADD_VIDEO_GAME_START,
	ADD_VIDEO_GAME_SUCCESS,
	ADD_VIDEO_GAME_FAILURE,
	DELETE_VIDEO_GAME_START,
	DELETE_VIDEO_GAME_SUCCESS,
	DELETE_VIDEO_GAME_FAILURE,
} from "../actions/videoGameActions";

const initialState = {
	loading: true,
	videoGames: [],
	videoGameViewData: null,
	error: null,
};

export const videoGameReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_VIDEO_GAMES_START:
			return {
				...state,
				loading: true,
				videoGames: [],
				videoGameViewData: null,
				error: null,
			};

		case FETCH_VIDEO_GAMES_SUCCESS:
			return {
				...state,
				loading: false,
				videoGames: action.payload,
				videoGameViewData: null,
				error: null,
			};

		case FETCH_VIDEO_GAMES_FAILURE:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: null,
				error: action.payload,
			};

		case FETCH_VIDEO_GAME_START:
			return {
				...state,
				loading: true,
				videoGames: [],
				videoGameViewData: null,
				error: null,
			};

		case FETCH_VIDEO_GAME_SUCCESS:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: action.payload,
				error: null,
			};

		case FETCH_VIDEO_GAME_FAILURE:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: null,
				error: action.payload,
			};
		case UPDATE_VIDEO_GAME_START:
			return {
				...state,
				loading: true,
				videoGames: [],
				videoGameViewData: null,
				error: null,
			};

		case UPDATE_VIDEO_GAME_SUCCESS:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: action.payload,
				error: null,
			};

		case UPDATE_VIDEO_GAME_FAILURE:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: null,
				error: action.payload,
			};
		case ADD_VIDEO_GAME_START:
			return {
				...state,
				loading: true,
				videoGames: [],
				videoGameViewData: null,
				error: null,
			};

		case ADD_VIDEO_GAME_SUCCESS:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: action.payload,
				error: null,
			};

		case ADD_VIDEO_GAME_FAILURE:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: null,
				error: action.payload,
			};

		case DELETE_VIDEO_GAME_START:
			return {
				...state,
				loading: true,
				videoGames: [],
				videoGameViewData: null,
				error: null,
			};

		case DELETE_VIDEO_GAME_SUCCESS:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: action.payload,
				error: null,
			};

		case DELETE_VIDEO_GAME_FAILURE:
			return {
				...state,
				loading: false,
				videoGames: [],
				videoGameViewData: null,
				error: action.payload,
			};

		default:
			return state;
	}
};
