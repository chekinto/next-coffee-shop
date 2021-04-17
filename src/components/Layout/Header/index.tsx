import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useRouter } from 'next/router'
import { useAppContext } from '../../../context'
import { Burger } from './Burger'
import { MobileNav } from './MobileNav'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { state } = useAppContext()

  return (
    <>
      <header className="header container">

        <Link className="header__logo" href="/">Coffee Shop</Link>

        <nav className="nav">
          <ul className="nav__list">
            <li className={`${router.asPath === '/' ? 'nav__link link--active' : 'nav__link'}`}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li className={`${router.asPath === '/shop' ? 'nav__link link--active' : 'nav__link'}`}>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>

            <li className={`${router.asPath === '/contact' ? 'nav__link link--active' : 'nav__link'}`}>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="header__details">
          <li>
            <Link href="/saved">
              <svg className="header__icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
          </li>

          <li>
            <Link href="/account">
              <svg className="header__icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </li>

          <li>
            <Link href="/basket">
              <div className="header__basket">
                <svg className="header__icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {state.basket.length === 0 ? null : (
                  <span className="basket-length">{state.basket.length}</span>
                )}
              </div>
            </Link>
          </li>
        </ul>
        <Burger handleClick={() => setIsOpen(prevState => !prevState)} />
        {/* <div className="burger-menu">
          <Image
            src={`${isOpen ? '/public/icons/icon-close.svg' : '/public/icons/icon-burger.svg'}`}
            width={24}
            height={24}
            onClick={() => setIsOpen(prevState => !prevState)}
          />
        </div> */}
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}