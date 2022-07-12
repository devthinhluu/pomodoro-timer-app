import React from "react";

const MAX_FOCUS_TIME = 60;
const MIN_FOCUS_TIME = 5;
const FOCUS_TIME_INCREMENT = 5;

function Focus({ time, isTimerActive, setTime }) {
	const handleClick = (operation) => {
		if (operation === "increase")
			setTime((prevTime) => prevTime + FOCUS_TIME_INCREMENT);
		else if (operation === "decrease")
			setTime((prevTime) => prevTime - FOCUS_TIME_INCREMENT);
	};

	return (
		<div className='input-group'>
			<input
				type='text'
				className='form-control'
				placeholder={`Focus Duration ${time}:00 min`}
				aria-label="Recipient's username"
				aria-describedby='basic-addon2'
				disabled
			/>
			<div className='input-group-append'>
				<button
					className='btn btn-outline-primary'
					type='button'
					onClick={() => handleClick("increase")}
					disabled={isTimerActive || time === MAX_FOCUS_TIME}
				>
					+
				</button>
				<button
					className='btn btn-outline-primary'
					type='button'
					onClick={() => handleClick("decrease")}
					disabled={isTimerActive || time === MIN_FOCUS_TIME}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default Focus;
