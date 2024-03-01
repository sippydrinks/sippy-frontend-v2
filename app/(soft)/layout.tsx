import { Footer, Header } from '@/shared'
import styles from './layout.module.scss'

export default function SoftLayout({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.layout}>
            <div className={styles.layout_background}>
                <Header />
                <div className={styles.layout_content}>
                    {children}
                </div>
            </div>
            <Footer type='soft' />
        </div>
    )
}