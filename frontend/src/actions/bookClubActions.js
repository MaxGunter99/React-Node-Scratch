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
export const GET_USER_DATA_START = "GET_USER_DATA_START";
export const GET_USER_DATA_SUCCESS = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_FAILURE = "GET_USER_DATA_FAILURE";

export const login =
	({ username, password }) =>
	(dispatch) => {
		dispatch({ type: LOGIN_START });

		axios
			.post("http://localhost:3001/auth/login", { username, password })
			.then((res) => {
				localStorage.setItem("jwt", res.data.token);
                console.log( res.data )
                const storeUserData = {
                    "id": res.data.id,
                    "uuid": res.data.uuid,
                    "username": username
                }
				localStorage.setItem("userData", JSON.stringify( storeUserData ) );
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
            const storeUserData = {
                "id": res.data.id,
                "uuid": res.data.uuid,
                "username": data.username
            }
			localStorage.setItem("userData", JSON.stringify( storeUserData ));
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

export const getUserData = async ( token ) => (dispatch) => {

    dispatch({ type: GET_USER_DATA_START });

    let storedUserData = localStorage.getItem( "userData" );
    let userID = JSON.parse( storedUserData )

    console.log( token )
    console.log( storedUserData )

	axios
		.get(`http://localhost:3001/user/${userID}`)
		.then((res) => {
			dispatch({
				type: GET_USER_DATA_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			let errorMessage = err?.response?.data?.message || err.message;
			dispatch({
				type: GET_USER_DATA_FAILURE,
				payload: errorMessage,
			});
		});

}
