import axios from "axios";

export const FETCH_VIDEO_GAMES_START = "FETCH_VIDEO_GAMES_START";
export const FETCH_VIDEO_GAMES_SUCCESS = "FETCH_VIDEO_GAMES_SUCCESS";
export const FETCH_VIDEO_GAMES_FAILURE = "FETCH_VIDEO_GAMES_FAILURE";
export const FETCH_VIDEO_GAME_START = "FETCH_VIDEO_GAME_START";
export const FETCH_VIDEO_GAME_SUCCESS = "FETCH_VIDEO_GAME_SUCCESS";
export const FETCH_VIDEO_GAME_FAILURE = "FETCH_VIDEO_GAME_FAILURE";

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
