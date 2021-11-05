import React from 'react'
import styles from './HomePage.module.scss'
import HeroSection from './HeroSection/HeroSection'

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <HeroSection />
    </div>
  )
}
