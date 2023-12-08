import { createContext } from 'react';

interface ContextProps {
	isOpenDrawer: boolean;
	isOpenOrganization: boolean;
	toggleIsOpenDrawer: () => void;
	toggleIsOpenOrganization: () => void;
}

export const LayoutContext = createContext({} as ContextProps);
