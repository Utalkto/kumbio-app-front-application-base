'use client';

import { FC, PropsWithChildren, useReducer } from 'react';
import { LayoutContext } from './LayoutContext';
import { layoutReducer } from './layoutReducer';

export interface LayoutState {
	isOpenDrawer: boolean;
	pathname: string;
	isOpenOrganization: boolean;
}

const Layout_INITIAL_STATE: LayoutState = {
	isOpenDrawer: false,
	pathname: '',
	isOpenOrganization: false,
};

export const LayoutProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(layoutReducer, Layout_INITIAL_STATE);

	const toggleIsOpenDrawer = () => {
		dispatch({ type: '[Layout] - OpenDrawer' });
	};

	const toggleIsOpenOrganization = () => {
		dispatch({ type: '[Layout] - OpenOrganization' });
	};

	return (
		<LayoutContext.Provider
			value={{ ...state, toggleIsOpenDrawer, toggleIsOpenOrganization }}
		>
			{children}
		</LayoutContext.Provider>
	);
};
