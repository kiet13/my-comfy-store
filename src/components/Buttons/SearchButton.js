import React from 'react'
import styles from './Button.module.scss'
import { FaSearch } from 'react-icons/fa'

export default function SearchButton({ className, clicked }) {
  const classes = [styles.SearchButton]
  if (className) {
    classes.push(className)
  }
  return (
    <button className={classes.join(' ')} onClick={clicked}>
      <FaSearch />
    </button>
  )
}
