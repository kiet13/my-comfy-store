import React from 'react'
import styles from './Colors.module.scss'
import { FaCheck } from 'react-icons/fa'

export default function Colors({ colorsList, currentColor, onColorChanged }) {
  const colors = colorsList.map((color) => {
    const classes = [styles.Color]
    if (color === currentColor) {
      classes.push(styles.ChoosedColor)
    }

    const colorStyle = {
      backgroundColor: color,
    }

    return (
      <span
        key={color}
        className={classes.join(' ')}
        style={colorStyle}
        onClick={() => onColorChanged(color)}
      >
        <FaCheck />
      </span>
    )
  })
  return <span className={styles.Colors}>{colors}</span>
}
