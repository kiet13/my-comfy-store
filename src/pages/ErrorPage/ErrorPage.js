import React from 'react'
import styles from './ErrorPage.module.scss'
import { PrimaryButton } from '../../components/Buttons'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.ErrorPage}>
      <h1>404</h1>
      <h2>Sorry, the page you tried cannot be found</h2>
      <PrimaryButton clicked={() => navigate('/')}>Back home</PrimaryButton>
    </div>
  )
}
