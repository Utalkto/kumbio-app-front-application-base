import { OnBoardingModal } from '@/components/OnBoardingModal';

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<OnBoardingModal />
			{children}
		</>
	);
}
