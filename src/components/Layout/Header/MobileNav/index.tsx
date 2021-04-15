import { FunctionComponent } from "react"
import { useRouter } from 'next/router'

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
      <ul>
        <li className={`${router.asPath === '/' ? 'mobile-link--active' : ''}`}>
          <a onClick={() => handleClick('/')}>Home</a>
        </li>
        <li className={`${router.asPath === '/shop' ? 'mobile-link--active' : ''}`}>
          <a onClick={() => handleClick('/shop')}>Shop</a>
        </li>
        <li className={`${router.asPath === '/contact' ? 'mobile-link--active' : ''}`}>
          <a onClick={() => handleClick('/contact')}>Contact</a>
        </li>
      </ul>
    </nav >
  )
}
