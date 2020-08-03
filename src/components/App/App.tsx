import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import LayoutComponent from "../Layout";
import "./app.scss";

interface IProps {
	pages: {
		path?: string;
		component: Parameters<typeof React.createElement>[0];
	}[];
}

function App({ pages }: IProps) {
	return (
		<Suspense fallback={<div>...Loading!</div>}>
			<LayoutComponent>
				<ErrorBoundary>
					<Switch>
						{pages.map(({ path, component }) => (
							<Route
								key={path || ""}
								path={path}
								exact
								render={() => (
									<Suspense fallback={<div>...Loading!</div>}>
										{React.createElement(component)}
									</Suspense>
								)}
							/>
						))}
					</Switch>
				</ErrorBoundary>
			</LayoutComponent>
		</Suspense>
	);
}

export default App;
