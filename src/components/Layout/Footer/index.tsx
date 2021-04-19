import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <div className="footer__grid container">
        <h3>Coffee Break</h3>

        <ul>
          <li>
            <h3>Products</h3>
          </li>
          <li>
            <Link href="/think/all">
              <a>Think</a>
            </Link>
          </li>
          <li>
            <Link href="/defend/all">
              <a>Defend</a>
            </Link>
          </li>
          <li>
            <Link href="/relax/all">
              <a>Relax</a>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <h3>Support</h3>
          </li>
          <li>
            <Link href="/account">
              <a>Account</a>
            </Link>
          </li>
          <li>
            <Link href="/help">
              <a>Help</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

        <div>
          <h3>Find Us</h3>
          <ul className="footer__social">
            <li>
              <img src="/icons/icon-facebook.svg" alt="facebook icon" width={24} height={24} />
            </li>
            <li>
              <img src="/icons/icon-instagram.svg" alt="instagram icon" width={24} height={24} />
            </li>
            <li>
              <img src="/icons/icon-twitter.svg" alt="twitter icon" width={24} height={24} />
            </li>
            <li>
              <img src="/icons/icon-github.svg" alt="github icon" width={24} height={24} />
            </li>

          </ul>
        </div>
      </div>
    </footer>
  )
}