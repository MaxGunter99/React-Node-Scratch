import axios from "axios";

export const FETCH_VIDEO_GAMES_START = "FETCH_VIDEO_GAMES_START";
export const FETCH_VIDEO_GAMES_SUCCESS = "FETCH_VIDEO_GAMES_SUCCESS";
export const FETCH_VIDEO_GAMES_FAILURE = "FETCH_VIDEO_GAMES_FAILURE";
export const FETCH_VIDEO_GAME_START = "FETCH_VIDEO_GAME_START";
export const FETCH_VIDEO_GAME_SUCCESS = "FETCH_VIDEO_GAME_SUCCESS";
export const FETCH_VIDEO_GAME_FAILURE = "FETCH_VIDEO_GAME_FAILURE";
export const UPDATE_VIDEO_GAME_START = "UPDATE_VIDEO_GAME_START";
export const UPDATE_VIDEO_GAME_SUCCESS = "UPDATE_VIDEO_GAME_SUCCESS";
export const UPDATE_VIDEO_GAME_FAILURE = "UPDATE_VIDEO_GAME_FAILURE";
export const ADD_VIDEO_GAME_START = "ADD_VIDEO_GAME_START";
export const ADD_VIDEO_GAME_SUCCESS = "ADD_VIDEO_GAME_SUCCESS";
export const ADD_VIDEO_GAME_FAILURE = "ADD_VIDEO_GAME_FAILURE";
export const DELETE_VIDEO_GAME_START = "DELETE_VIDEO_GAME_START";
export const DELETE_VIDEO_GAME_SUCCESS = "DELETE_VIDEO_GAME_SUCCESS";
export const DELETE_VIDEO_GAME_FAILURE = "DELETE_VIDEO_GAME_FAILURE";

export const getVideoGames = () => (dispatch) => {
	dispatch({ type: FETCH_VIDEO_GAMES_START });

	axios
		.get("http://localhost:3001/videoGames")
		.then((res) => {
			dispatch({
				type: FETCH_VIDEO_GAMES_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: FETCH_VIDEO_GAMES_FAILURE,
				payload: err.message,
			});
		});
};

export const getVideoGame = (id) => (dispatch) => {
	dispatch({ type: FETCH_VIDEO_GAME_START });

	axios
		.get(`http://localhost:3001/videoGames/${id}`)
		.then((res) => {
			dispatch({
				type: FETCH_VIDEO_GAME_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: FETCH_VIDEO_GAME_FAILURE,
				payload: err.message,
			});
		});
};

export const updateVideoGame = (data) => (dispatch) => {
	dispatch({ type: UPDATE_VIDEO_GAME_START });

	axios
		.put(`http://localhost:3001/videoGames/${data.id}`, data)
		.then((res) => {
			dispatch({
				type: UPDATE_VIDEO_GAME_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			let errorMessage = err?.response?.data?.message || err.message
			dispatch({
				type: UPDATE_VIDEO_GAME_FAILURE,
				payload: errorMessage,
			});
		});
};

export const addVideoGame = (data) => (dispatch) => {
	dispatch({ type: ADD_VIDEO_GAME_START });

	axios
		.post(`http://localhost:3001/videoGames`, data)
		.then((res) => {
			dispatch({
				type: ADD_VIDEO_GAME_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			let errorMessage = err?.response?.data?.message || err.message
			dispatch({
				type: ADD_VIDEO_GAME_FAILURE,
				payload: errorMessage,
			});
		});
};

export const deleteVideoGame = (id) => (dispatch) => {
	dispatch({ type: DELETE_VIDEO_GAME_START });

	axios
		.delete(`http://localhost:3001/videoGames/${id}`)
		.then((res) => {
			dispatch({
				type: DELETE_VIDEO_GAME_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			let errorMessage = err?.response?.data?.message || err.message
			dispatch({
				type: DELETE_VIDEO_GAME_FAILURE,
				payload: errorMessage,
			});
		});
};
