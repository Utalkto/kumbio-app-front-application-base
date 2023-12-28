import { OnChangeIndexCallback } from 'react-swipeable-views';

export interface Props {
	tabPanels: JSX.Element[];
	activeIndex: number;
	onChangeIndex: OnChangeIndexCallback;
}

export interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}
