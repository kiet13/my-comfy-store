import React from 'react'
import { FaUserPlus, FaUserMinus } from 'react-icons/fa'
import styles from './Button.module.scss'

export default function AuthButton({ auth, clicked }) {
  return (
    <button className={styles.AuthButton} onClick={() => clicked(auth)}>
      <span className={styles.Text}>{auth ? 'Logout' : 'Login'}</span>
      {auth ? <FaUserMinus /> : <FaUserPlus />}
    </button>
  )
}
