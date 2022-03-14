import { Field } from 'formik'
import { useContext } from 'react'
import { Context } from '../context'
import Floor from './Floor.component'

export default function Choice() {
  const { local_A, step, goNext } = useContext(Context)
  const {
    locA_houseElevator,
    setLocA_houseElevator,
    locaA_houseType,
    setLocaA_houseType,
  } = local_A
  return (
    <div className="md:flex-1">
      <label
        htmlFor="house"
        className={` mx-auto block  cursor-pointer p-4 ${
          locaA_houseType ? 'border-4 border-primary' : 'opacity-50'
        }`}
        onClick={() => setLocaA_houseType(true)}
      >
        <div className="flex flex-col items-center ">
          <div className="flex items-center space-x-4">
            <Field name="locType.houseType">
              {({ field }) => (
                <input
                  type="radio"
                  name="locType.houseType"
                  id="house"
                  {...field}
                  value="house"
                />
              )}
            </Field>

            <img src="/images/house.svg" alt="house" />
          </div>
          <div>
            <div className=" text-primary">House</div>
          </div>
        </div>
        {/* here */}
        <div className="mt-4   text-center">
          <div className=" flex flex-col justify-center">
            <div className=" flex  justify-center">
              Elevator :
              <span
                onClick={() => setLocA_houseElevator(false)}
                className="mx-4 block"
              >
                <label htmlFor="h_no" className="mr-4  block">
                  no
                  <Field name="locType.elevator">
                    {({ field }) => (
                      <input
                        type="radio"
                        name="locType.elevator"
                        id="h_no"
                        className="ml-2"
                        {...field}
                        value={false}
                      />
                    )}
                  </Field>
                </label>
              </span>
              <span onClick={() => setLocA_houseElevator(true)}>
                <label htmlFor="h_yes" className="mr-2">
                  yes{' '}
                </label>

                <Field name="locType.elevator">
                  {({ field }) => (
                    <input
                      type="radio"
                      name="locType.elevator"
                      id="h_yes"
                      {...field}
                      value={true}
                    />
                  )}
                </Field>
              </span>
            </div>

            {locaA_houseType && (
              <div>
                <Floor locaA_houseType={locaA_houseType} name="locType.floor" />
              </div>
            ) }
          </div>
        </div>
      </label>

      {/* end */}
    </div>
  )
}

// locA_houseElevator={locA_houseElevator}