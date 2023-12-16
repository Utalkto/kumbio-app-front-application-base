import { DrawerProps } from '@mui/material';

export interface Props extends DrawerProps {
	onOpen: () => void;
	onClose: () => void;
}
