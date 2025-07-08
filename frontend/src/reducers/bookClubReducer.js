import {
	LOGIN_START,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	REGISTER_START,
	REGISTER_SUCCESS,
	REGISTER_FAILURE,
    VALIDATING_USER,
    LOGIN_USER,
    LOGOUT_USER
} from "../actions/bookClubActions";

import { isAuthenticated } from "../utils";

export const initialState = {
	loading: false,
	error: null,
	isAuthenticated: isAuthenticated(),
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

		case VALIDATING_USER:
			return {
				...state,
				loading: true,
				isAuthenticated: null,
			};
		case LOGIN_USER:
			return {
				...state,
				loading: true,
				isAuthenticated: action.payload,
			};
		case LOGOUT_USER:
			return {
				...state,
				loading: true,
				isAuthenticated: false,
			};

		default:
			return state;
	}
};
