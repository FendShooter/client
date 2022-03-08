import Link from 'next/link'
import React from 'react'
import Carte from '../components/Carte'
export default function Footer() {
  return (
    <>
      <div>
        <Carte />
      </div>
      <footer className=" bg-[#06314C]">
        <div className="wrap_center mx-auto flex max-w-6xl flex-col   items-center justify-center bg-[#06314C] p-2 md:flex-row md:items-start">
          <section className="mt-4 w-full">
            <div className="flex items-center space-x-2">
              <span>
                <img src="../images/icon_phone.svg" alt="" />
              </span>
              <Link href="tel:342008161">
                <a className="text-[#99F8FF]">934-200-8161</a>
              </Link>
            </div>
            <div className="my-2 flex flex-col">
              <div className="my-2 flex space-x-2">
                <span>
                  <img src="../images/icon_mail.svg" alt="" />
                </span>
                <Link href="mailto:edekmoving1@gmail.com">
                  <a className="text-[#99F8FF]">edekmoving1@gmail.com</a>
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full text-white">
            <div className="">
              <section className=" w-full text-[#99F8FF]">
                <div className="mx-auto flex-col items-center space-x-4 sm:space-y-4  md:flex-row">
                  <Link href="/getquote/?step-1">Home</Link>
                  <Link href="/about">About us</Link>
                  <Link href="/long-distance">Long distance</Link>
                  <Link href="/contact-us"> Contacts</Link>
                </div>
              </section>
              <div className="my-4 flex h-16 w-28 cursor-pointer space-x-4">
                <Link href="https://www.google.com/maps/place/EDEK+MOVING+STORAGE+%26+SERVICES+LLC/@40.6971494,-74.2598655,10z/data=!3m1!4b1!4m5!3m4!1s0x89c2f5137455d2d9:0x80a433117c3b4872!8m2!3d40.6974881!4d-73.979681">
                  <img src="../images/google.jpg" alt="google reviews" />
                </Link>
                <img src="../images/yelp.jpg" alt="yelp logo" />
                <img src="../images/fb.jpg" alt="facebook reviews" />
              </div>

              <p>Follows us on:</p>
              <div className="mt-2 flex space-x-4">
                <Link href="https://www.facebook.com/EDEK-Moving-LLC-104395488119534/">
                  <a>
                    <img src="../images/fb.svg" alt="facebook logo" />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/p/CGWM05tDGFG/?igshid=1fmydqiorhhva">
                  <a>
                    <img src="../images/instagram.svg" alt="instagram logo" />
                  </a>
                </Link>
                <img src="../images/pin.svg" alt="pinterest logo" />
              </div>
            </div>
          </section>
        </div>
        <p className="pb-2 text-center text-white">{`© ${new Date().getFullYear()} edekmoving. All rights reserved.`}</p>
      </footer>
    </>
  )
}
