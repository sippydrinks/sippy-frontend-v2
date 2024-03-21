'use client';
import { Footer, Header } from '@/shared'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import { usePathname } from 'next/navigation';
import styles from './layout.module.scss'

export default function Layout({children}: {children: React.ReactNode}) {
    const { theme }: ContextProps = useGlobalContext()
    const route = usePathname()
    const isCategoriesRoute = route === '/categories' || route === '/categories/alcohol'
    return (
        <div className={styles.layout}>
            <div data-theme={theme} className={styles.layout_background}>
                {isCategoriesRoute === true ? <Header /> : <Header isNavButton />}
                <div className={styles.layout_content}>
                    {children}
                </div>
            </div>
            <Footer type='soft' />
        </div>
    )
}