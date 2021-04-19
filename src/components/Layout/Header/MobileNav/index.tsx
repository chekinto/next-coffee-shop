import React from 'react'
import { FunctionComponent } from "react"
import { useRouter } from 'next/router'

const mobileNavLinks = [
  { title: 'home', path: '/' },
  { title: 'shop', path: '/shop' },
  { title: 'contact', path: '/contact' },
  { title: 'think', path: '/think/all' },
  { title: 'chill', path: '/chill/all' },
  { title: 'defend', path: '/defend/all' }
]

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export const MobileNav: FunctionComponent<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter()

  function handleClick(link: string) {
    router.push(link)
    setIsOpen(false)
  }

  return (
    <nav className={`mobile-nav ${isOpen ? 'slide-out' : 'slide-in'}`}>
      <div className="mobile-nav-container">
        <ul>
          {mobileNavLinks.map((link, index) => (
            <React.Fragment key={link.title}>
              <li className={`${router.asPath === link.path ? 'mobile-link--active' : ''}`}>
                <a className="capitalize" onClick={() => handleClick(link.path)}>{link.title}</a>
              </li>
              {index === 2 && (
                <>
                  <hr style={{ borderTop: '1px solid var(--grey-medium)' }} />
                  <h3 style={{ marginBottom: '2.5rem' }}>Categories</h3>
                </>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  )
}
