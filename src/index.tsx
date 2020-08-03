import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import { store } from "./redux/store";
import NotFound from "./components/not-found";
import { HashRouter } from 'react-router-dom';

const pages: React.ComponentProps<typeof App>["pages"] = [
	{
		path: "/",
		component: lazy(() => import("./components/Home")),
	},
	{
		path: "/test",
		component: lazy(() => import("./components/test")),
	},
	{ component: NotFound },
];

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App pages={pages} />
		</HashRouter>
	</Provider>,
	document.getElementById("root")
);
