import { OnBoardingModal } from '@/components/OnBoardingModal';
import { MainLayout } from '@/layouts';

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<OnBoardingModal />
			<MainLayout>{children}</MainLayout>
		</>
	);
}
