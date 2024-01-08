'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import RootProviders from '@/context/RootProvider';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient({}));

	return (
		<QueryClientProvider client={queryClient}>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			<SessionProvider>
				<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
					<RootProviders>{children}</RootProviders>
				</LocalizationProvider>
			</SessionProvider>
		</QueryClientProvider>
	);
}
