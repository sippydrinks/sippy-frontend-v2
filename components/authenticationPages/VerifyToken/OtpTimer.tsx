import React, { useEffect, useState } from 'react';

interface TimerProps {
	initialTime: number; // Initial time in seconds
	onTimerFinish?: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtpTimer: React.FC<TimerProps> = ({ initialTime, onTimerFinish }) => {
	const [time, setTime] = useState(initialTime * 60);

	useEffect(() => {
		if (time > 0) {
			const timerId = setInterval(() => {
				setTime((prevTime) => prevTime - 1);
			}, 1000);

			return () => clearInterval(timerId);
		} else {
			// Timer has finished, invoke the callback if provided
			if (onTimerFinish) {
				onTimerFinish(false);
			}
		}
	}, [time, onTimerFinish]);

	const formatTime = (seconds: number): string => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
	};

	return <div>{formatTime(time)}</div>;
};

export default OtpTimer;
