'use client';
import { HomeView } from '@/Views';
import { Footer, Header } from '@/shared';
import styles from './page.module.scss';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';

export default function Home() {
	const { theme }: ContextProps = useGlobalContext();
	return (
		<div className={styles.layout}>
			<div data-theme={theme} className={styles.layout_background}>
				<Header isNavButton />
				<div className={styles.layout_content}>
					<HomeView type='soft' />
				</div>
			</div>
			<Footer type='soft' />
		</div>
	);
}
