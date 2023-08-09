'use client'

import React from 'react'

import styles from './header.module.css'
import { inter, roboto } from '../../lib/fonts'

import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'

import { LOGO, navRoutes } from '../../lib/utils'

export default () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  const segments = useSelectedLayoutSegments()

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  //closing nav menu after clicking on a nav item
  const navClick = () => {
    setIsNavOpen(false)
  }
 
  return (
    <header className={`${styles.root} horizontal ${isNavOpen && styles.open}`}>
      <Link href={'home'}><h1 className={`${inter.className} ${styles.logo}`}>{LOGO}</h1></Link>

      <button className={styles.navButton} onClick={toggleNav}>
        <img src={isNavOpen ? '/cross.svg' : '/nav.svg'} alt='' />
      </button>

      <div className={`
        horizontal
        ${styles.navRoot}
        ${!isNavOpen && styles.hidden}
      `}>
        <nav className={`${styles.nav} ${roboto.className} horizontal`}>
          {
            navRoutes.map(({ title, href, options }) => (
              <p key={title} data-current={href === segments[1]}>
                {options
                  ? <span className={styles.select}>{title}</span>
                  : <Link href={href} onClick={navClick}>{title}</Link>}
              </p>
            ))
          }
        </nav>
      </div>

      <div className={`${styles.buttons} ${!isNavOpen && styles.hidden}`}>
        <button className={styles.avatar}><img src='/avatar.svg' alt='' /></button>
        <button className={styles.basket}><img src='/basket.svg' alt='' /></button>
      </div>
    </header>
  )
}