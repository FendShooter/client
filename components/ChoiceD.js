import { Field } from 'formik'
import { useContext } from 'react'
import { Context } from '../context'
import Floor from './Floor.component'

export default function ChoiceD() {
  const { step, local_B, goNext, goPrevious } = useContext(Context)
  const {
    locB_houseElevator,
    setLocB_houseElevator,
    locB_appartElevator,
    setLocB_appartElevator,
    locaB_houseType,
    setLocB_houseType,
  } = local_B
  return (
    <div className="form_group md:flex-1">
      <div>
        <label
          htmlFor="apartment"
          className={` mx-auto  block cursor-pointer p-4  ${
            !locaB_houseType ? 'border-4 border-primary' : 'opacity-50'
          }`}
          onClick={() => setLocB_houseType(false)}
        >
          <div className="flex flex-col items-center ">
            <div className="flex items-center space-x-4">
              <Field name="locTypeB.houseType">
                {({ field }) => (
                  <input
                    type="radio"
                    name="locTypeB.houseType"
                    id="apartment"
                    {...field}
                    value="apartment"
                  />
                )}
              </Field>
              <img src="/images/apartment.svg" alt="apartment" />
            </div>
            <div>
              <div className=" text-primary">Apartment</div>
            </div>
          </div>
          {/* here */}
          <div className="mt-4 text-center">
            <div className=" flex flex-col justify-center">
              <div className=" flex  justify-center">
                Elevator :
                <span
                  onClick={() => setLocB_houseElevator(false)}
                  className="mx-4 block"
                >
                  <label htmlFor="h_no" className="mr-4  block">
                    no
                    <Field name="locTypeB.elevator">
                      {({ field }) => (
                        <input
                          type="radio"
                          name="locTypeB.elevator"
                          id="h_no"
                          className="ml-2"
                          {...field}
                          value={false}
                        />
                      )}
                    </Field>
                  </label>
                </span>
                <span onClick={() => setLocB_houseElevator(true)}>
                  <label htmlFor="h_yes" className="mr-2">
                    yes{' '}
                  </label>

                  <Field name="locTypeB.elevator">
                    {({ field }) => (
                      <input
                        type="radio"
                        name="locTypeB.elevator"
                        id="h_yes"
                        {...field}
                        value={true}
                      />
                    )}
                  </Field>
                </span>
              </div>
              {!locaB_houseType && (
                <div>
                  <Floor name="locTypeB.floor" />
                </div>
              )}
            </div>
          </div>
        </label>

        {/* end */}
      </div>
      {/* appartment */}
    </div>
  )
}
