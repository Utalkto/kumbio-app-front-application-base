import React, { FC, PropsWithChildren } from 'react';
import MaterialProvider from '../MaterialUI/MaterialProvider';
import { LayoutProvider } from '../LayoutContext';

const RootProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<MaterialProvider options={{ key: 'mui' }}>
				<LayoutProvider>{children}</LayoutProvider>
			</MaterialProvider>
		</>
	);
};

export default RootProviders;
