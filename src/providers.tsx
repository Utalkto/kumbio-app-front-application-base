'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import RootProviders from '@/context/RootProvider';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<RootProviders>{children}</RootProviders>
		</QueryClientProvider>
	);
}
