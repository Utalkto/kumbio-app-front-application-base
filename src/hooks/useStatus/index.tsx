import { useState } from 'react';
import { IStatus } from './interfaces';

export const useStatus = () => {
	const [status, setStatus] = useState<IStatus>('idle');

	const onChangeStatus = (newStatus: IStatus) => {
		setStatus(newStatus);
	};

	return { onChangeStatus, status };
};
