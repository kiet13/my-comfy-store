import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <section className={styles.Footer}>
      <p>
        &copy; 2021 <span className={styles.Branch}>ComfySloth</span> All rights
        reserved
      </p>
    </section>
  )
}
