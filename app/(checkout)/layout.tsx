'use client';
import { Footer, Header } from '@/shared';
import styles from './layout.module.scss';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';

export default function Layout({ children }: { children: React.ReactNode }) {
	const { theme }: ContextProps = useGlobalContext();
	return (
		<div className={styles.layout}>
			<div data-theme={theme} className={styles.layout_background}>
				<Header isNavButton />
				<div className={styles.layout_content}>{children}</div>
			</div>
		</div>
	);
}
