import React, { useState } from 'react'
import styles from './Subscription.module.scss'

export default function Subscription() {
  const [email, setEmail] = useState('')

  const onEmailChanged = (e) => {
    setEmail(e.target.value)
  }

  const onSubmitHandle = (e) => {
    e.preventDefault()

    // Do something here

    setEmail('')
  }
  return (
    <section className={styles.Subscription}>
      <h1>Join our newsletter and get 20% off</h1>
      <div className={styles.SubContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
        <form onSubmit={onSubmitHandle}>
          <input
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={onEmailChanged}
          />
          <button onClick={onSubmitHandle}>Subscribe</button>
        </form>
      </div>
    </section>
  )
}
