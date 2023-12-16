import {
	TimeFieldProps,
	TimePicker,
	renderTimeViewClock,
} from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React from 'react';

export const TimeInput = (props: TimeFieldProps<dayjs.Dayjs>) => {
	return (
		<TimePicker
			minutesStep={15}
			ampm={true}
			viewRenderers={{
				hours: renderTimeViewClock,
				minutes: renderTimeViewClock,
				seconds: renderTimeViewClock,
			}}
			onChange={props.onChange}
			sx={{
				'& .MuiOutlinedInput-root': {
					borderRadius: '1rem',
					fontSize: '0.7rem',
				},
				// Padding input
				'& .MuiOutlinedInput-input': {
					padding: '10.5px 0px 10.5px 8px',
				},
			}}
			value={props.value}
		/>
	);
};
