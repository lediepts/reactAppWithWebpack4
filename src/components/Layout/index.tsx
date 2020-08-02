import React from "react";
import "./style.scss";
interface IProps {
	children?: React.ReactElement;
}

export default function layoutComponent({ children }: IProps) {
	return (
		<div className="rootPage">
			{children}
		</div>
	);
}
