import React from 'react'
import styles from './NavBar.module.scss'
import Logo from '../../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthButton, CartButton } from '../../Buttons'

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <div className={styles.NavBar}>
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{ width: '18rem', height: 'auto' }} />
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/checkout'>Checkout</Link>
      </nav>
      <div className={styles.Actions}>
        <CartButton clicked={() => navigate('/cart')} numItems={0} />
        <AuthButton />
      </div>
    </div>
  )
}
