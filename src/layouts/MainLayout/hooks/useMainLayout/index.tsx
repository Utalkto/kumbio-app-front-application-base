import { useBoolean } from '@/hooks';
import { usePathname } from 'next/navigation';

export const useMainLayout = () => {
	const {
		value: isOpenDrawer,
		setTrue: setTrueIsOpenDrawer,
		setFalse: setFalseIsOpenDrawer,
		toggle: toggleIsOpenDrawer,
	} = useBoolean();
	const { value: isOpenOrganization, toggle: toggleIsOpenOrganization } =
		useBoolean();
	const pathname = usePathname();

	return {
		isOpenDrawer,
		pathname,
		isOpenOrganization,
		toggleIsOpenDrawer,
		setTrueIsOpenDrawer,
		setFalseIsOpenDrawer,
		toggleIsOpenOrganization,
	};
};
