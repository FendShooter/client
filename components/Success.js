import { useContext } from 'react'
import { Context } from '../context'
import { useRouter } from 'next/router'
export default function Success() {
  const { setStep } = useContext(Context)
  const router = useRouter()

  const gotoPage = () => {
    setStep(1)
    // window.location.replace('/about')
    router.replace('/about')
  }
  return (
    <div className=" h-[350px] justify-center">
      <h1 className="mt-10 text-center text-3xl">
        Thank you for submitting...
      </h1>
      <div className="my-8 flex justify-center text-center">
        <p
          className="btn_call_us w-[200px] cursor-pointer px-4 py-2 text-white"
          onClick={gotoPage}
        >
          More about us
        </p>
      </div>
    </div>
  )
}
