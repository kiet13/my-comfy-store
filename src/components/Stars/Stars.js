import React from 'react'
import styles from './Stars.module.scss'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { nanoid } from 'nanoid'

const MAX_STARS = 5

export default function Stars({ numStars }) {
  // Round up to .5, eg: 2.3 -> 2.5,...
  const roundedStars = (numStars * 2).toFixed(0) / 2
  let renderedStars = []

  // If decimal places is zero
  for (let i = 0; i < MAX_STARS; i++) {
    if (i + 1 <= roundedStars) {
      renderedStars.push(<FaStar key={nanoid()} />)
    } else if (i + 1 === parseInt((roundedStars + 0.5).toFixed(0))) {
      renderedStars.push(<FaStarHalfAlt key={nanoid()} />)
    } else {
      renderedStars.push(<FaRegStar key={nanoid()} />)
    }
  }

  return <div className={styles.Stars}>{renderedStars}</div>
}
