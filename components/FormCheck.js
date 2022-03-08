import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../context'
import { apiRequests } from '../services/apiResquests'

function FormCheck() {
  const router = useRouter()
  useEffect(() => {
    router.push('getquote/?step-3')
  }, [])
  const { step, goNext, goPrevious, setStep } = useContext(Context)
  const [locationA, setLocationA] = useState(
    JSON.parse(localStorage.getItem('location-a'))
  )
  const [locationB, setLocationB] = useState(
    JSON.parse(localStorage.getItem('location-b'))
  )
  const result = { ...locationA.values, ...locationB.values }

  const {
    addressTo,
    addressFrom,
    contact,
    city,
    cityB,
    zipCode,
    zipCodeB,
    date,
    list,
    note,
    locType: { houseType, elevator, floor },
    locTypeB,
  } = result
  const submitHandler = async () => {
    if (step > 4) {
      return
    }

    const response = await apiRequests.post('/edekmoving', { ...result })
    if (response.data.success) {
      goNext()
    }
  }
  return (
    <div className="my-10">
      <div className="flex flex-col justify-between  space-y-6 md:flex-row md:space-x-6">
        <div>
          <h1 className="text-2xl text-black">Moving From :</h1>
          <p className="my-2 flex space-x-4 text-xl">
            <span className="inline-block">Contact: </span>
            <span className="inline-block">{contact}</span>
          </p>
          <p className="my-2 flex space-x-4 text-xl ">
            <span className="inline-block">Address: </span>
            <span className="inline-block">
              {addressFrom} {city} {zipCode}
            </span>
          </p>
          <p className="my-2 flex space-x-4 text-xl">
            <span className="inline-block">Type: </span>
            <span className="inline-block">{houseType}</span>
          </p>
          <div className="flex space-x-4">
            <div className="flex space-x-4 text-xl">
              <span className="inline-block">Elevator: </span>
              <span className="inline-block">
                {elevator === 'false' ? 'na' : 'Yes'}
              </span>
            </div>
            <span>|</span>
            <div className="flex space-x-4 text-xl">
              <span className="inline-block">Floor: </span>
              <span className="inline-block">{!floor ? 'na' : floor}</span>
            </div>
          </div>
          <p className="my-2 flex space-x-4 text-xl">
            <span className="inline-block">Date: </span>
            <span className="inline-block">{date}</span>
          </p>
          <p className="my-2 flex space-x-4 text-xl">
            <span className="inline-block">List: </span>
            <span className="inline-block">{list}</span>
          </p>
          {note && (
            <p className="my-2 flex space-x-4 text-xl">
              <span className="inline-block">Note: </span>
              <span className="inline-block">{note}</span>
            </p>
          )}
        </div>
        <div>
          <h1 className="text-2xl text-black">Moving To :</h1>

          <p className="my-2 flex space-x-4 text-xl">
            <span className="inline-block">Address: </span>
            <span className="inline-block">
              {addressTo} {cityB} {zipCodeB}
            </span>
          </p>
          <p className="my-2 flex space-x-4 text-xl">
            <span className="inline-block">Type: </span>{' '}
            <span className="inline-block">{locTypeB?.houseType}</span>
          </p>
          <div className="flex space-x-4">
            <div className="flex space-x-4 text-xl">
              <span className="inline-block">Elevator: </span>
              <span className="inline-block">
                {locTypeB?.elevator === 'false' ? 'na' : 'Yes'}
              </span>
            </div>
            <span>|</span>
            <div className="flex space-x-4 text-xl">
              <span className="inline-block">Floor: </span>
              <span className="inline-block">
                {!locTypeB?.floor ? 'na' : locTypeB?.floor}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 flex items-center justify-between">
        {step > 1 ? (
          <Link href="#">
            <a
              className="w-32 py-2 px-4  text-slate-500 underline"
              onClick={goPrevious}
            >
              Back
            </a>
          </Link>
        ) : (
          ''
        )}
        {step > 4 ? (
          'loading'
        ) : (
          <button
            type="button"
            onClick={submitHandler}
            className="w-24 bg-primary/75 py-2 px-4 text-white duration-500 ease-in-out hover:bg-primary"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export default FormCheck
