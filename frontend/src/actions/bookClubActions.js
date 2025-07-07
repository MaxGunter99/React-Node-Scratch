
import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const login = ( {username, password} ) => (dispatch) => {

	dispatch({ type: LOGIN_START });

	axios
		.post("http://localhost:3001/auth/login", {username, password})
		.then((res) => {
            localStorage.setItem('jwt', res.data.token);
            localStorage.setItem('username', username);
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
            let errorMessage = err?.response?.data?.message || err.message
			dispatch({
				type: LOGIN_FAILURE,
				payload: errorMessage,
			});
		});
};