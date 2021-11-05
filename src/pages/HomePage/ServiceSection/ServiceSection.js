import React from 'react'
import styles from './ServiceSection.module.scss'
import { ServiceCard } from '../../../components'
import { services } from '../../../utils/constants'

export default function ServiceSection() {
  const content = services.map((item) => (
    <ServiceCard
      key={item.id}
      icon={item.icon}
      title={item.title}
      text={item.text}
    />
  ))
  return (
    <section className={styles.ServiceSection}>
      <div className={styles.ServiceHeading}>
        <h1>Custom Furniture Built Only For You</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
          debitis consectetur reprehenderit non aliquam voluptates dolore aut
          vero consequuntur.
        </p>
      </div>
      <div className={styles.ServiceContent}>{content}</div>
    </section>
  )
}
