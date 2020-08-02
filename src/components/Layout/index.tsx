import React from "react";

interface IProps {
	children?: React.ReactElement;
}

export default function layoutComponent({ children }: IProps) {
	return <div>{children}</div>;
}
