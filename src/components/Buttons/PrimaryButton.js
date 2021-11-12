import React from 'react'
import styles from './Button.module.scss'

export default function PrimaryButton({
  className,
  children,
  clicked,
  disabled,
}) {
  const classes = [styles.PrimaryButton]
  if (className) {
    classes.push(className)
  }
  return (
    <button className={classes.join(' ')} onClick={clicked} disabled={disabled}>
      {children}
    </button>
  )
}
