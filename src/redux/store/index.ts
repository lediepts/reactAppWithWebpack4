import {
	AnyAction,
	applyMiddleware,
	compose,
	createStore,
	Reducer,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

function configureStore(rootReducer: Reducer<any, AnyAction>) {
	const middleware: any = [sagaMiddleware];
	let enhancers;

	if (process.env.NODE_ENV === "development") {
		enhancers = [applyMiddleware(sagaMiddleware, loggerMiddleware)];
		return createStore(rootReducer, composeWithDevTools(...enhancers));
	} else {
		enhancers = [applyMiddleware(...middleware)];
		return createStore(rootReducer, compose(...enhancers));
	}
}
export const store = configureStore(rootReducer);
sagaMiddleware.run(rootSaga);
