import { call, put, takeLatest } from "redux-saga/effects";
import { getUser } from "./userApi";

function* getUserList() {
	const res = yield call(getUser);
	yield put({
		type: "GET_USER",
		payload: {
			name: res.data.results[0].email,
		},
    });
}
export function* getUserListSaga() {
	yield takeLatest("RELOAD", getUserList);
}