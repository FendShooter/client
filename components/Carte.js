import React from 'react'
export default function Carte() {
  return (
    <div className=" mx-auto my-4 flex max-w-6xl flex-col items-center bg-slate-100/50 md:flex-row md:justify-around">
      <h1 className="  w-full flex-1 text-center  text-3xl font-semibold text-[#105681] md:w-[50%] ">
        When you choose us, you’re getting the best service and the best
        quality.
      </h1>
      <div className="my-8 flex h-auto w-[360px] flex-1 md:h-56  md:w-56">
        <img src="/images/carte.svg" />
      </div>
    </div>
  )
}
