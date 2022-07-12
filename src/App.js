import "./App.css";
import { useState } from "react";
import TimeRemaining from "./components/TimeRemaining";
import Break from "./components/Break";
import Focus from "./components/Focus";

const DEFAULT_FOCUS_TIME = 25;
const DEFAULT_BREAK_TIME = 5;

function App() {
	const [focusTime, setFocusTime] = useState(DEFAULT_FOCUS_TIME);
	const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_TIME);

	const [timerActive, setTimerActive] = useState(false);
	const [isFocused, setIsFocused] = useState(true);

	return (
		<div className='timer'>
			<h1>Pomodoro Timer</h1>
			<Focus
				time={focusTime}
				isTimerActive={timerActive}
				setTime={setFocusTime}
			/>

			<Break
				time={breakTime}
				isTimerActive={timerActive}
				setTime={setBreakTime}
			/>
			<TimeRemaining
				isFocused={isFocused}
				setIsFocused={setIsFocused}
				time={isFocused ? focusTime : breakTime}
				setTimerActive={setTimerActive}
				timerActive={timerActive}
			/>
		</div>
	);
}

export default App;
