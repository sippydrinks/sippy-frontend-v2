'use client';
import { Footer, Header } from "@/shared"
import { ContextProps, useGlobalContext } from "@/contexts/AppContext"
import { usePathname, useRouter } from "next/navigation";
import styles from './layout.module.scss'

export default function Layout({children}: {children: React.ReactNode}) {
    const { theme }: ContextProps = useGlobalContext()
    const route = usePathname()
    const router = useRouter()
    const isCategoriesRoute = route === '/categories/alcohol/' ||  route === '/alcohol'
    return (
        <div className={styles.layout}>
            <div data-theme={theme} className={styles.layout_background}>
                {isCategoriesRoute ? <Header /> : <Header isNavButton />}
                <div className={styles.layout_content}>
                    {children}
                </div>
            </div>
            <Footer type="alcohol" />
        </div>
    )
}