import React, { useState } from "react";
import "../../styles/index.scss";
export function Likes() {
	const [count, setCount] = useState(0);
	return (
		<div className="cardsDiv">
			<h3>{count} likes</h3>
			<span onClick={() => setCount(count + 1)}>
				<i
					className="far fa-thumbs-up"
					style={{
						color: "#c29b61",
						fontSize: "30px",
						padding: "5px"
					}}></i>
			</span>
			<span onClick={() => setCount(count - 1)}>
				<i
					className="far fa-thumbs-down"
					style={{
						color: "#c29b61",
						fontSize: "30px",
						padding: "5px"
					}}></i>
			</span>
		</div>
	);
}
