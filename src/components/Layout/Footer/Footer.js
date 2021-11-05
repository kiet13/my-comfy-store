import React from 'react'
import styles from './Footer.module.scss'

export default function Footer({ showSideBar }) {
  const classes = [styles.Footer]
  classes.push(styles.SideBarShow)

  return (
    <section className={classes.join(' ')}>
      <p>
        &copy; 2021 <span className={styles.Branch}>ComfySloth</span> All rights
        reserved
      </p>
    </section>
  )
}
