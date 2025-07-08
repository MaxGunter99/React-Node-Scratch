import axios from "axios";
import { isAuthenticated } from "../utils";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const VALIDATING_USER = "VALIDATING_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const login =
	({ username, password }) =>
	(dispatch) => {
		dispatch({ type: LOGIN_START });

		axios
			.post("http://localhost:3001/auth/login", { username, password })
			.then((res) => {
				localStorage.setItem("jwt", res.data.token);
				localStorage.setItem("username", username);
				dispatch({
					type: LOGIN_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				let errorMessage = err?.response?.data?.message || err.message;
				dispatch({
					type: LOGIN_FAILURE,
					payload: errorMessage,
				});
			});
	};

export const register = (data) => (dispatch) => {
	dispatch({ type: REGISTER_START });

	axios
		.post("http://localhost:3001/auth/register", data)
		.then((res) => {
			localStorage.setItem("jwt", res.data.token);
			localStorage.setItem("username", data.username);
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			let errorMessage = err?.response?.data?.message || err.message;
			dispatch({
				type: REGISTER_FAILURE,
				payload: errorMessage,
			});
		});
};

export const validateAuthentication = ( ) => (dispatch) => {
    dispatch({ type: VALIDATING_USER });
    const tokenIsAuthenticated = isAuthenticated()
    if ( ! tokenIsAuthenticated ) {
        dispatch({ type: LOGOUT_USER });
    } else {
        dispatch({ type: LOGIN_USER, payload: tokenIsAuthenticated  });
    }
}
