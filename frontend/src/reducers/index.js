import { combineReducers } from "redux";
import { videoGameReducer } from "./videoGameReducer";

const rootReducer = combineReducers({
	videoGamesReducer: videoGameReducer,
});

export default rootReducer;
