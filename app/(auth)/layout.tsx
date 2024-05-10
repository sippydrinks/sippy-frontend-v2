'use client';
import { usePathname } from 'next/navigation';
import styles from './layout.module.scss';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const isRecoverPassword = pathname === '/recoverPassword'
	return (
		<div className={styles.auth_container}>
			<div data-path={isRecoverPassword} className={styles.auth_layout}>
				{children}
			</div>
		</div>
	);
}
