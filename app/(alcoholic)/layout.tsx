'use client';
import { Footer, Header } from "@/shared"
import { ContextProps, useGlobalContext } from "@/contexts/AppContext"
import styles from './layout.module.scss'

export default function Layout({children}: {children: React.ReactNode}) {
    const { theme }: ContextProps = useGlobalContext()
    return (
        <div className={styles.layout}>
            <div data-theme={theme} className={styles.layout_background}>
                <Header />
                <div className={styles.layout_content}>
                    {children}
                </div>
            </div>
            <Footer type="alcohol" />
        </div>
    )
}