import type { Metadata } from 'next';
import '@/styles/index.scss';
import styles from './layout.module.scss';

export const metadata: Metadata = {
	title: 'Sippy Life',
	description: 'Sippy Life',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return <div className={styles.auth_layout}>{children}</div>;
}
