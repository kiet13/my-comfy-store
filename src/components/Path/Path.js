import React from 'react'
import styles from './Path.module.scss'
import { useLocation, Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { capitalize } from '../../utils/helpers'

export default function Path({ productName }) {
  const { pathname } = useLocation()
  const links = pathname.split('/').filter((item) => item)

  const current = productName ? productName : links.at(-1)

  const paths = links.slice(0, -1).reduce((prev, curr) => {
    let lastPrevEl = prev.at(-1)
    if (lastPrevEl) {
      prev.push(`${lastPrevEl}/${curr}`)
    } else {
      prev.push(`/${curr}`)
    }
    return prev
  }, [])

  const content = []
  for (let i = 0; i < paths.length; i++) {
    content.push(
      <Link key={nanoid()} to={paths[i]}>
        {`/ ${capitalize(links[i])}`}
      </Link>
    )
  }

  const currentWords = capitalize(current).split(' ')

  return (
    <section className={styles.Path}>
      <h3>
        <Link to='/'>Home</Link>
        {content}
        {`/ ${capitalize(current)}`}
      </h3>
    </section>
  )
}
