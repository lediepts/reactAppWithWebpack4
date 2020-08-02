import React from "react";
import { useRouter } from "../hooks";

export default function NotFound() {
	const { history } = useRouter();
	return (
		<div>
			<div
				style={{
					display: "block",
					padding: "50px auto",
					background: "rgba(255,255,255,0.4)",
				}}
			>
				<h2 style={{ display: "inlineBlock", paddingTop: "25px" }}>
					お探しのページが見つかりませんでした。
				</h2>
				<br />
				<p>
					お探しのページは「すでに削除されている」、「アクセスしたアドレスが異なっている」などの理由で見つかりませんでした。
				</p>
				<div>
					<button
						onClick={() => {
							history.push("/");
						}}
					>
						トップページへ戻る
					</button>
				</div>
			</div>
		</div>
	);
}
