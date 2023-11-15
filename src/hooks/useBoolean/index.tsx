'use client';

import { useState, useCallback } from 'react';

export const useBoolean = (initialValue = false) => {
	const [value, setValue] = useState(initialValue);

	const setTrue = useCallback(() => {
		setValue(true);
	}, []);

	const setFalse = useCallback(() => {
		setValue(false);
	}, []);

	const toggle = useCallback(() => {
		setValue((prevValue) => !prevValue);
	}, []);

	return { value, setTrue, setFalse, toggle };
};
