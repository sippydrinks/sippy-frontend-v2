import { HomeView } from "@/Views";
import { Footer, Header } from "@/shared";
import styles from './page.module.scss'

export default function Home({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.layout}>
      <div className={styles.layout_background}>
          <Header />
          <div className={styles.layout_content}>
            <HomeView type="soft" />
          </div>
      </div>
      <Footer type='soft' />
    </div>
  );
}
