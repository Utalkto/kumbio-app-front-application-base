'use client';

import { ProviderStore } from './store/ProviderStore';
import RootProviders from '@/context/RootProvider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ProviderStore>
            <RootProviders>
                { children }
            </RootProviders>
        </ProviderStore>
    )
}