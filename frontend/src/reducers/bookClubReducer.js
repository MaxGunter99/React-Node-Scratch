
// import {
//     LOGIN_SUCCESS,
//     LOGIN_FAILURE
// } from "../actions/bookClubActions";

export const initialState = {
	loading: false,
	
    isAuthenticated: true
};

export const bookClubReducer = (state = initialState, action) => {
    switch (action.type) {

        // case FETCH_VIDEO_GAMES_START:
        //     return {
        //         ...state,
        //         loading: true,
        //         videoGames: [],
        //         videoGameViewData: null,
        //         error: null,
        //     };

        default:
            return state;
    }
};