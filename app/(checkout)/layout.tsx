'use client';
import { Footer, Header } from '@/shared';
import styles from './layout.module.scss';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
	const { theme }: ContextProps = useGlobalContext();
	const route = usePathname();
	const checkRoute = route.includes('/categories');
	return (
		<div className={styles.layout}>
			<div data-theme={theme} className={styles.layout_background}>
				{checkRoute === true ? <Header /> : <Header isNavButton />}
				<div className={styles.layout_content}>{children}</div>
			</div>
		</div>
	);
}
