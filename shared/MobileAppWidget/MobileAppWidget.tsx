import React from 'react'
import Image from 'next/image'
import styles from './MobileAppWidget.module.scss'

const MobileAppWidget = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.text_section}>
          <h3>Experience even more with our mobile app </h3>
          <p>Download our native iOS and Android apps and have your comfort in your hands!!</p>
        </div>
        <div className={styles.links_container}>
          <div className={styles.link_container}>
            <div className={styles.icon}>
              <Image alt='' src='/svgs/iosIcon.svg' fill />
            </div>
            <div className={styles.link_container_texts}>
              <p>Download on</p>
              <h3>App Store</h3>
            </div>
          </div>

          <div className={styles.link_container}>
            <div className={styles.icon}>
              <Image alt='' src='/svgs/playStoreIcon.svg' fill />
            </div>
            <div className={styles.link_container_texts}>
              <p>Download on</p>
              <h3>Google Play</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.phone}>
        <Image alt='phoneImg' src='/svgs/mobileapp.svg' priority fill />
      </div>
      <div className={styles.image1}>
        <Image alt='star' src='/svgs/mobileAppStar.svg' fill />
      </div>
      <div className={styles.image2}>
        <Image alt='star' src='/svgs/mobileAppStar2.svg' fill />
      </div>
    </div>
  )
}

export default MobileAppWidget;