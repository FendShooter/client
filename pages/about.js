import React from 'react'
import Title from '../components/Title'
import Gallery from 'react-photo-gallery'
import Head from 'next/head'
const photos = [
  {
    src: '/images/gallery_1.jpg',
    width: 3,
    height: 3,
  },
  {
    src: '/images/gallery_2.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/images/gallery_3.jpg',
    width: 3,
    height: 3,
  },
  {
    src: '/images/gallery_4.jpg',
    width: 3,
    height: 4,
  },

  {
    src: '/images/gallery_5.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/images/gallery_6.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/images/gallery_7.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/images/gallery_8.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/images/gallery_9.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/images/gallery_10.jpg',
    width: 3,
    height: 4,
  },
]

function About() {
  return (
    <div className="wrap_center mb-20 px-4">
      <Title size="uppercase text-4xl font-bold" text="About us" />
      <div className="my-6 flex flex-col  items-center text-xl md:flex-row">
        <p
          className=" w-full leading-7 first-letter:float-left first-letter:mr-3 first-letter:text-8xl
          first-letter:font-bold first-letter:text-primary first-line:uppercase
          first-line:tracking-widest md:w-[50%]"
        >
          EDEK MOVING LLC offer you a Crew of young, strong and professional
          movers and helpers you need today. our crew is ready to lift you all
          the heavy stuff that you need. We provide last minute labor, delivery,
          moving for commercial & residential (LOCAL or LONG DISTANCE...). Proud
          to help everyone no matter the size of your move or distance. On time
          movers we want to make sure you get a quality service FOR EVERY CENT
          you will spend. Call or Text to make appointment.
        </p>
        <div className="flex h-1/2 w-1/2 justify-center space-x-8">
          {/* <img src="./images/logo.svg" alt="long distance" /> */}
        </div>
      </div>
      <div>
        <Gallery photos={photos} direction={'row'} className="cursor-pointer" />
      </div>
    </div>
  )
}

export default About
