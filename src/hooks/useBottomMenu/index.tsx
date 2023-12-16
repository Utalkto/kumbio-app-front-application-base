import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const useBottomMenu = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [value, setValue] = useState(pathname);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const onClickMenuItem = (path: string) => {
		setValue(path.split('/')[1]);
		handleClose();
		router.push(path);
	};

	return {
		value,
		anchorEl,
		pathname,
		handleClose,
		open,
		handleClick,
		onClickMenuItem,
	};
};
