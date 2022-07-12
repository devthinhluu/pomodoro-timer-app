import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import sound from "./cartoon-ending-sound.mp3";

const SECONDS = 60;
const audio = new Audio(sound);

function TimeRemaining({
	time,
	timerActive,
	setTimerActive,
	isFocused,
	setIsFocused,
}) {
	const [timeRemaining, setTimeRemaining] = useState(time * SECONDS);
	const [percentage, setPercentage] = useState(0);
	const [isPaused, setIsPaused] = useState(true);

	useEffect(() => {
		if (!isPaused) {
			const interval = setInterval(() => {
				setTimeRemaining((timeRemaining) => timeRemaining - 1);
				setPercentage(
					Math.abs(Math.floor((timeRemaining / setTime(time)) * 100) - 100)
				);
			}, 1000);

			if (timeRemaining === 0) {
				setPercentage(0);
				setIsFocused((prevState) => !prevState);
				setTimeRemaining(setTime(time));
				setIsPaused(true);
				audio.play();
			}
			return () => {
				clearInterval(interval);
			};
		}
	}, [timeRemaining, isPaused]);

	useEffect(() => {
		setTimeRemaining(setTime(time));
	}, [time]);

	const handleStartPause = () => {
		if (!timerActive) setTimerActive(true);
		setIsPaused((prevState) => !prevState);
	};

	const handleStopSession = () => {
		setTimerActive(false);
		setIsFocused(true);
		setTimeRemaining(setTime(time));
		setPercentage(0);
		setIsPaused(true);
	};

	// helper functions
	const formatTimeLeft = (seconds) => {
		return `${Math.floor(seconds / 60)}:${
			seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
		}`;
	};

	const setTime = (time) => {
		return time * SECONDS;
	};

	const style = {
		width: `${percentage}%`,
	};

	return (
		<div className='time-remaining'>
			<div className='btn-group'>
				<button
					className='btn btn-primary btn-block'
					onClick={handleStartPause}
				>
					{isPaused ? "START" : "PAUSE"}
				</button>
				<button
					className='btn btn-outline-secondary btn-block'
					onClick={handleStopSession}
				>
					RESET
				</button>
			</div>
			{timerActive && (
				<div>
					<h3 className='count-down-text'>
						{isFocused ? "Focusing" : "Taking a Break"} for:
					</h3>
					<h2 className='count-down'>{formatTimeLeft(timeRemaining)}</h2>
					<div className='progress'>
						<div
							className='progress-bar'
							role='progressbar'
							style={style}
							aria-valuenow='25'
							aria-valuemin='0'
							aria-valuemax='100'
						></div>
					</div>
				</div>
			)}
		</div>
	);
}

export default TimeRemaining;
