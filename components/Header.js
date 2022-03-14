import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Context } from '../context'
import Menu from '../svg/menu'
import CloseICon from '../svg/close'
import Hi from './Hi'
import Portal from './Portal'
import { AnimatePresence } from 'framer-motion'

export default function Header() {
  const { pathname } = useRouter()

  const { mounted, setMounted } = useContext(Context)

  return (
    <>
      {mounted && (
        <AnimatePresence>
          <Portal>
            <Hi />
          </Portal>
        </AnimatePresence>
      )}
      <header className="wrap_center flex-none bg-white">
        <nav className="flex items-center justify-between py-2 px-4">
          <div className="relative flex items-center ">
            <div>
              <Link href="/getquote">
                <a>
                  <img
                    src="/images/logo.svg"
                    width={120}
                    height={120}
                    alt="edekmoving logo"
                  />
                </a>
              </Link>
            </div>
            <Link href="/getquote">
              <a>
                <h1 className="max-w-[250px]  font-bold text-primary sm:text-xl">
                  EDEK MOVING,STORAGE & SERVICES LLC
                </h1>
              </a>
            </Link>
          </div>
          <div
            className=" cursor-pointer lg:hidden"
            onClick={() => setMounted(!mounted)}
          >
            {!mounted ? <Menu /> : <CloseICon />}
          </div>
          <ul className="hidden flex-auto items-center justify-end lg:flex   lg:space-x-8">
            <li
              className={` ${
                pathname === '/getquote' ? ' border-b-2 border-primary  ' : ''
              } `}
            >
              <Link href="/getquote">
                <a
                  className={` ${
                    pathname === '/getquote'
                      ? 'font-semibold uppercase  text-primary'
                      : 'uppercase'
                  } `}
                >
                  Home
                </a>
              </Link>
            </li>
            <li
              className={` ${
                pathname === '/long-distance'
                  ? ' border-b-2 border-primary  '
                  : ''
              } `}
            >
              <Link href="/long-distance">
                <a
                  className={` ${
                    pathname === '/long-distance'
                      ? 'font-semibold uppercase text-primary'
                      : 'uppercase'
                  } `}
                >
                  Long distance
                </a>
              </Link>
            </li>
            <li
              className={` ${
                pathname === '/about'
                  ? ' border-b-2 border-primary uppercase  '
                  : ''
              } `}
            >
              <Link href="/about">
                <a
                  className={` ${
                    pathname === '/about'
                      ? ' font-semibold text-primary '
                      : 'uppercase'
                  } `}
                >
                  About us
                </a>
              </Link>
            </li>
            <li
              className={` ${
                pathname === '/contact-us'
                  ? ' border-b-2 border-primary uppercase '
                  : 'uppercase'
              } `}
            >
              <Link href="/contact-us">
                <a
                  className={` ${
                    pathname === '/contacts-us'
                      ? ' font-semibold text-primary '
                      : ''
                  } `}
                >
                  Contacts
                </a>
              </Link>
            </li>
            <li>
              <Link href="tel:934-200-8161">
                <a className="btn_call_us px-4 py-2 text-white">934-200-8161</a>
              </Link>
            </li>
            <li
              className={` ${
                pathname === '/reviews'
                  ? ' border-b-2 border-primary uppercase '
                  : 'uppercase'
              } `}
            >
              <Link href="/reviews">
                <a
                  className={` ${
                    pathname === '/reviews'
                      ? ' font-semibold text-primary '
                      : ''
                  } `}
                >
                  Reviews
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
