import Link from 'next/link'
import { useRouter } from 'next/router'
import { tailwind } from '../../../styles/tailwind-variables'

export const Header = () => {
  const router = useRouter()
  console.log('router :>> ', router);
  return (
    <header>
      <nav className={tailwind.background.bgColor}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className={`${router.asPath === '/' ? tailwind.activeNavLink : tailwind.navLink}`}>
                      Home
                    </a>
                  </Link>

                  <Link href="/shop">
                    <a className={`${router.asPath === '/shop' ? tailwind.activeNavLink : tailwind.navLink}`}>
                      Shop
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className={`${router.asPath === '/contact' ? tailwind.activeNavLink : tailwind.navLink}`}>
                      Contact
                    </a>
                  </Link>

                  <Link href="/favourites">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center text-gray-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </Link>
                  <Link href="/account">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center text-gray-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>

                  <Link href="/basket">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 self-center text-gray-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" >
              <a className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            </Link>

            <Link href="#" >
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop</a>
            </Link>

            <Link href="#" >
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </Link>
          </div>
          <div className="pb-3 border-t border-gray-700">
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
            </div>
          </div>
        </div>
      </nav>
    </header >
  )
}