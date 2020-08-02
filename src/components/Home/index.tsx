import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";


export default function Home() {
    const dispatch = useDispatch();
	const name = useSelector((state: RootState) => state.user.name);
	const handleClick = () => {
		dispatch({
			type: "RELOAD",
		});
	};
	return (
		<div>
			<header>
				<a href="#" target="_blank" rel="noopener noreferrer">
					{name}
				</a>
				<button onClick={() => handleClick()}>Reload</button>
			</header>
		</div>
	);
}
