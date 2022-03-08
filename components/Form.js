import FormOne from './FormOne'
import FormTwo from './FormTwo'
import FormCheck from './FormCheck'
import Success from './Success'
import { useContext } from 'react'
import { Context } from '../context'
export default function Form() {
  const { step } = useContext(Context)
  switch (step) {
    case 1:
      return (
        <div className="mx-auto md:w-[50%]">
          <FormOne />
        </div>
      )
    case 2:
      return (
        <div className="mx-auto md:w-[50%]">
          <FormTwo />
        </div>
      )
    case 3:
      return (
        <div className="mx-auto md:w-[70%]">
          <FormCheck />
        </div>
      )
    case 4:
      return (
        <div className="mx-auto md:w-[50%]">
          <Success />
        </div>
      )

    default:
      break
  }
}

// return (
//   <div className="mx-auto w-full md:w-[40%]">
//     <FormOne />
//   </div>
// )
