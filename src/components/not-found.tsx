import React from "react";
import { useRouter } from "../hooks";

export default function NotFound() {
	const { history } = useRouter();
	return (
		<div>
			<div
				style={{
					display: "block",
					padding: "150px auto",
					textAlign: "center",
				}}
			>
				<h2 style={{ display: "inlineBlock", paddingTop: "100px" }}>
					お探しのページが見つかりませんでした。
				</h2>
				<br />
				<p>
					お探しのページは「すでに削除されている」、「アクセスしたアドレスが異なっている」などの理由で見つかりませんでした。
				</p>
				<div>
					<button
						style={{
							marginTop: 30 ,
						}}
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
