'use client';
import { MainLayoutProps } from '@/interface/layout'
import styles from './MainLayout.module.scss'

const MainLayout = ({children, type, isNavButton}: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_background}>
        <main className={styles.layout_content}>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout