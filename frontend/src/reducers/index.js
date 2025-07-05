import { combineReducers } from "redux";
import { videoGameReducer } from "./videoGameReducer";
import { bookClubReducer } from "./bookClubReducer";

const rootReducer = combineReducers({
	videoGamesReducer: videoGameReducer,
	bookClubReducer: bookClubReducer,
});

export default rootReducer;
