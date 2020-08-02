import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import "./style.scss"


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
				<h1>
					{name}
				</h1>
				<h2>
					{name}
				</h2>
				<h3>
					{name}
				</h3>
				<h4>
					{name}
				</h4>
				<h5>
					{name}
				</h5>
				<h6>
					{name}
				</h6>
				<p>
					{name}
				</p>
				<button onClick={() => handleClick()}>Reload</button>
			</header>
		</div>
	);
}
