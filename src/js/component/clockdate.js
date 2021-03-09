import React, { useState, useEffect } from "react";
import "../../styles/index.scss";

export function ClockDate() {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const elapsedSeconds = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(elapsedSeconds);
	}, [date]);

	return (
		<React.Fragment>
			<div className="clock">
				<div className="hours">{date.getHours()}</div>
				<div className="minutes">{date.getMinutes()}</div>
				<div className="seconds">{date.getSeconds()}</div>
				<div className="update" onClick={() => setDate(new Date())}>
					<i className="fas fa-sync-alt"></i>
				</div>
			</div>
		</React.Fragment>
	);
}
