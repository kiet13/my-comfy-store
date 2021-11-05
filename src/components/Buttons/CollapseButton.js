import React from 'react'
import styles from './Button.module.scss'

export default function CollapseButton({ showSideBar, clicked }) {
  const classes = [styles.CollapseButton]
  showSideBar ? classes.push(styles.Close) : classes.push(styles.Open)

  return (
    <button className={classes.join(' ')} onClick={clicked}>
      <div></div>
    </button>
  )
}
