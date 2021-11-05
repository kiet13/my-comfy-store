import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import styles from './Button.module.scss'

export default function AuthButton({ auth, clicked }) {
  return (
    <button className={styles.AuthButton} onClick={clicked}>
      <span className={styles.Text}>{auth ? 'Logout' : 'Login'}</span>
      <FaUserPlus />
    </button>
  )
}
