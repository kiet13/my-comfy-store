import React from 'react'
import styles from './NavBar.module.scss'
import Logo from '../../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AuthButton, CartButton, CollapseButton } from '../../Buttons'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
import { getNumCartItems } from '../../../features/cart/cartSlice'

export default function NavBar({ showSideBar, onSideBarToggled }) {
  const navigate = useNavigate()
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()
  const numItemsInCart = useSelector(getNumCartItems)

  const classes = [styles.NavBar]
  if (showSideBar) {
    classes.push(styles.SideBarShow)
  }

  const onAuthButtonClicked = (auth) => {
    console.log(auth)
    if (auth) {
      logout({ returnTo: window.location.origin })
    } else {
      loginWithRedirect()
    }
  }

  return (
    <div className={classes.join(' ')}>
      <CollapseButton showSideBar={showSideBar} clicked={onSideBarToggled} />
      <Link to='/'>
        <img src={Logo} alt='Logo' style={{ width: '18rem', height: 'auto' }} />
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        {isAuthenticated ? <Link to='/checkout'>Checkout</Link> : null}
      </nav>
      <div className={styles.Actions}>
        <CartButton
          clicked={() => navigate('/cart')}
          numItems={numItemsInCart}
        />
        <AuthButton clicked={onAuthButtonClicked} auth={isAuthenticated} />
      </div>
    </div>
  )
}
