import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useContext } from 'react'
import { Context } from '../context'

export default function Hi() {
  const { setMounted } = useContext(Context)
  const closeModal = () => setMounted(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" sm:w-1/2 "
    >
      <ul className=" flex  flex-col space-y-8 text-xl text-white ">
        <li onClick={closeModal}>
          <Link href="/getquote/?step-1">
            <a className="font-semibold ">Home</a>
          </Link>
        </li>
        <li onClick={closeModal}>
          <Link href="/long-distance">Long distance</Link>
        </li>
        <li onClick={closeModal}>
          <Link href="/about">About us</Link>
        </li>
        <li onClick={closeModal}>
          <Link href="/contact-us">Contact</Link>
        </li>
        <li onClick={closeModal}>
          <Link href="/reviews">Reviews</Link>
        </li>
        <li>
          <Link href="tel:934-200-8161">
            <a className="btn_call_us px-4 py-2 text-white">934-200-8161</a>
          </Link>
        </li>
      </ul>
      <section className="mt-11 w-full text-white">
        <div className="">
          <p>Follows us on:</p>
          <div className="mt-2 flex space-x-4">
            <Link href="https://www.facebook.com/EDEK-Moving-LLC-104395488119534/">
              <a target="_blank">
                <img src="../images/fb.svg" alt="facebook logo" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/p/CGWM05tDGFG/?igshid=1fmydqiorhhva">
              <a target="_blank">
                <img src="../images/instagram.svg" alt="instagram logo" />
              </a>
            </Link>
            <Link href="https://www.pinterest.com">
              <a target="_blank">
                <img src="../images/pin.svg" alt="pinterest logo" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
