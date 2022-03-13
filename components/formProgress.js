import { useContext } from 'react'
import { Context } from '../context'
import Checked from '../svg/checked'
export default function FormProgress() {
  const { step } = useContext(Context)
  if (step === 1) {
    return (
      <div className=" flex items-center justify-center">
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          {step}
          <div className="absolute top-8 left-1 w-[120px]  text-left text-base uppercase text-black md:text-right">
            Moving from
          </div>
        </div>
        <div className="h-1 w-2/6  bg-slate-300"></div>
        <div className="h-6 w-6 rounded-full bg-slate-300"></div>

        <div className="h-1 w-2/6  bg-slate-300"></div>
        <div className="h-6 w-6 rounded-full bg-slate-300"></div>
      </div>
    )
  }
  if (step === 2) {
    return (
      <div className="flex items-center justify-center">
        <div className=" relative flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[#99F8FF]">
          <Checked />
        </div>
        <div className="h-1 w-2/6  bg-primary"></div>
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-300">
          {step}
          <div className="absolute top-6 w-[120px] text-center text-base uppercase text-black">
            Moving To
          </div>
        </div>

        <div className="h-1 w-2/6  bg-slate-300"></div>
        <div className="h-6 w-6 rounded-full bg-slate-300"></div>
      </div>
    )
  }
  if (step === 3) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          <Checked />
        </div>
        <div className="h-1 w-2/6  bg-primary"></div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          <Checked />
        </div>

        <div className="h-1 w-2/6  bg-primary"></div>
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-300">
          {step}
          <div className="absolute top-6 -right-4 w-[120px] text-left text-base uppercase text-primary">
            Almost Done
          </div>
        </div>
      </div>
    )
  }
  if (step === 4) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          <Checked />
        </div>
        <div className="h-1 w-2/6  bg-primary"></div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          <Checked />
        </div>

        <div className="h-1 w-2/6  bg-primary"></div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
          <Checked />
        </div>
      </div>
    )
  }
}
