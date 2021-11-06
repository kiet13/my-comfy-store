import React from 'react'
import styles from './AboutPage.module.scss'
import { Path } from '../../components'
import AboutImg from '../../assets/hero-bcg.jpeg'

export default function AboutPage() {
  return (
    <>
      <Path />
      <div className={styles.About}>
        <img src={AboutImg} alt='hero1' />
        <div className={styles.AboutContent}>
          <h1>our story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </>
  )
}
