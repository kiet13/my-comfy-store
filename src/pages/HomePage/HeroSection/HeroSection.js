import React from 'react'
import styles from './HeroSection.module.scss'
import { PrimaryButton } from '../../../components/Buttons'
import HeroImg1 from '../../../assets/hero-bcg.jpeg'
import HeroImg2 from '../../../assets/hero-bcg-2.jpeg'
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className={styles.HeroSection}>
      <div className={styles.HeroContent}>
        <h1 className={styles.HeroHeading}>Design your comfort zone</h1>
        <p className={styles.HeroText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <PrimaryButton clicked={() => navigate('/products')}>
          SHOP NOW
        </PrimaryButton>
      </div>
      <div className={styles.HeroImages}>
        <img className={styles.HeroImage1} src={HeroImg1} alt='hero1' />
        <img className={styles.HeroImage2} src={HeroImg2} alt='hero1' />
      </div>
    </section>
  )
}
