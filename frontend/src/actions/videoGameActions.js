import axios from "axios";

export const FETCH_VIDEO_GAMES_START = "FETCH_VIDEO_GAMES_START";
export const FETCH_VIDEO_GAMES_SUCCESS = "FETCH_VIDEO_GAMES_SUCCESS";
export const FETCH_VIDEO_GAMES_FAILURE = "FETCH_VIDEO_GAMES_FAILURE";

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
