import { User } from "../reducers/user";

export interface SetUser {
	type: "GET_USER";
	payload: User;
}
export interface Reload {
	readonly type: "RELOAD";
}

export type userActions = SetUser | Reload;
