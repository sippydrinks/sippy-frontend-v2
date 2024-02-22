import { useRouter } from "next/router"
import styles from "./ChartLoader.module.scss"
const ChartLoader = () => {
  const router = useRouter()
  const route = router.asPath
  return (
    <div className={styles.preloader}>
      <div data-route={route.includes('/alcohol')} className={styles.loader}></div>
    </div>
  )
}

export default ChartLoader