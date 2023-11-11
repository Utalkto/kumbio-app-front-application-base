import React, { FC, PropsWithChildren } from 'react';
import MaterialProvider from '../MaterialUI/MaterialProvider';

const RootProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<MaterialProvider options={{ key: 'mui' }}>{children}</MaterialProvider>
		</>
	);
};

export default RootProviders;
