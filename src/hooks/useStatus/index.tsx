'use client';

import { useState } from 'react';
import { IStatus } from './interfaces';

export const useStatus = (initialState?: IStatus) => {
	const [status, setStatus] = useState<IStatus>(initialState ?? 'idle');

	const onChangeStatus = (newStatus: IStatus) => {
		setStatus(newStatus);
	};

	return { onChangeStatus, status };
};
