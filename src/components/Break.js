import React from "react";

const MAX_BREAK_TIME = 15;
const MIN_BREAK_TIME = 1;
const BREAK_TIME_INCREMENT = 1;

function Break({ time, isTimerActive, setTime }) {
	const handleClick = (operation) => {
		if (operation === "increase")
			setTime((prevTime) => prevTime + BREAK_TIME_INCREMENT);
		else if (operation === "decrease")
			setTime((prevTime) => prevTime - BREAK_TIME_INCREMENT);
	};

	return (
		<div className='input-group'>
			<input
				type='text'
				className='form-control'
				placeholder={`Break Duration ${time}:00 min`}
				aria-label="Recipient's username"
				aria-describedby='basic-addon2'
				disabled
			/>
			<div className='input-group-append'>
				<button
					className='btn btn-outline-primary'
					type='button'
					onClick={() => handleClick("increase")}
					disabled={isTimerActive || time === MAX_BREAK_TIME}
				>
					+
				</button>
				<button
					className='btn btn-outline-primary'
					type='button'
					onClick={() => handleClick("decrease")}
					disabled={isTimerActive || time === MIN_BREAK_TIME}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default Break;
