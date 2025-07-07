import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
} from "../actions/bookClubActions";

export const initialState = {
	loading: false,
	error: null,
	isAuthenticated: false,
};

export const bookClubReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				loading: true,
				error: null,
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				isAuthenticated: true,
			};

		case LOGIN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				isAuthenticated: false,
			};

		case REGISTER_START:
			return {
				...state,
				loading: true,
				error: null,
			};

		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				isAuthenticated: true,
			};

		case REGISTER_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};
