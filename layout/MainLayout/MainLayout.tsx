'use client';
import { useEffect } from 'react';
import { MainLayoutProps } from '@/interface/layout'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { Header, Footer } from '@/shared';
import { usePathname } from 'next/navigation';
import styles from './MainLayout.module.scss'

const MainLayout = ({children, type, isNavButton}: MainLayoutProps) => {
  const { theme, drinkType }: ContextProps = useGlobalContext();
	const route = usePathname();
  
	const urlCheck = route.includes('/alcohol')
	useEffect(() => {
		const bodyNode = document.body.style
		bodyNode.backgroundColor = urlCheck === false ? '#540068' : '#E77644'
	}, [urlCheck])

  return (
    <div data-route={route} data-type={type} className={styles.layout}>
      <div className={styles.layout_background} data-theme={theme}>
        <Header isNavButton={isNavButton} />
        <main className={styles.layout_content}>{children}</main>
      </div>
      <Footer type={drinkType} />
    </div>
  )
}

export default MainLayout