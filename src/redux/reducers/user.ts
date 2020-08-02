import { userActions } from "../actions/userActions";

export type User = {
	name?: string;
};

export function UserReducer(
	state: User = {
		name: "",
	},
	action: userActions
) {
	switch (action.type) {
		case "GET_USER":
			const { payload: user } = action;
			return {
				...state,
				name: user.name,
			};

		case "RELOAD":
			return state;

		default:
			return state;
	}
}
