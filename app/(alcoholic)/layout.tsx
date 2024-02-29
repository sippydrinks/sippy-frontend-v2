'use client';
import { MainLayout } from "@/layout"
import { Footer, Header } from "@/shared"
import styles from '@/layout/MainLayout/MainLayout.module.scss'


export default function AlcoholLayout({children}: {children: React.ReactNode}) {
    return (
        // <MainLayout type="alcohol">
        //     {children}
        //  </MainLayout>
        <div className={styles.layout_alcohol}>
            <div className={styles.layout_background}>
                <Header />
                <div className={styles.layout_content}>{children}</div>
            </div>
            <Footer />
        </div>
    )
}