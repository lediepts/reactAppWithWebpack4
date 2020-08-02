import { combineReducers } from "redux";
import countReducer from "./countReducer";
import { UserReducer } from "./user";

const rootReducer = combineReducers({
	count: countReducer,
	user: UserReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
