import { useContext } from "react";
import {
	__RouterContext,
	RouteComponentProps,
	StaticContext,
} from "react-router";

export type PathParams = {
	[key: string]: string | undefined;
};

export default function useRouter() {
	return useContext<RouteComponentProps<PathParams, StaticContext, any>>(
		__RouterContext
	);
}
