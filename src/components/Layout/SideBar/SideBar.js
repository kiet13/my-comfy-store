import React from 'react'
import styles from './SideBar.module.scss'
import { Link } from 'react-router-dom'

export default function SideBar({ auth, show }) {
  const classes = [styles.SideBar]
  show ? classes.push(styles.Show) : classes.push(styles.Hidden)

  return (
    <nav className={classes.join(' ')}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Product</Link>
      {auth ? <Link to='/checkout'>Checkout</Link> : null}
    </nav>
  )
}
