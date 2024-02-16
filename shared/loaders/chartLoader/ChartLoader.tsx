import { usePathname } from "next/navigation"
import styles from "./ChartLoader.module.scss"
const ChartLoader = () => {
  const route = usePathname()
  return (
    <div className={styles.preloader}>
      <div data-route={route.includes('/alcohol')} className={styles.loader}></div>
    </div>
  )
}

export default ChartLoader