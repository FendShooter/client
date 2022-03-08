import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="mb-20 pl-4">
      <h1 className="my-8 text-center text-3xl font-semibold text-black md:text-5xl">
        Oops, page not found
      </h1>
      <h1 className="my-8 text-center text-5xl font-semibold text-red-500">
        404
      </h1>
      <p className="mx-auto mb-10 w-full py-4 text-xl text-slate-500/80 md:w-[45%] md:text-2xl">
        We are very sorry for the inconveniece. It looks like you are trying to
        access a page that has been deteled or never even existed.
      </p>
      <div className="text-center">
        <Link href="/">
          <a className="btn_call_us px-4 py-2 text-white">BACK TO HOMEPAGE</a>
        </Link>
      </div>
    </div>
  )
}
