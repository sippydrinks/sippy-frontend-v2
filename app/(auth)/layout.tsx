import type { Metadata } from 'next';
import '@/styles/index.scss';

export const metadata: Metadata = {
	title: 'Sippy Life',
	description: 'Sippy Life',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}
