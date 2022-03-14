import { Field } from 'formik'
import { useContext } from 'react'
import { Context } from '../context'
import Floor from './Floor.component'

export default function ChoiceB() {
  const { local_A, step, goNext } = useContext(Context)
  const {
    locA_houseElevator,
    setLocA_houseElevator,
    locA_appartElevator,
    setLocA_appartElevator,
    locaA_houseType,
    setLocaA_houseType,
  } = local_A
  return (
    <div className="form_group md:flex-1">
      <div>
        <label
          htmlFor="appartment"
          className={` mx-auto  block cursor-pointer p-4  ${
            !locaA_houseType ? 'border-4 border-primary' : 'opacity-50'
          }`}
          onClick={() => setLocaA_houseType(false)}
        >
          <div className="flex flex-col items-center ">
            <div className="flex items-center space-x-4">
              <Field name="locType.houseType">
                {({ field }) => (
                  <input
                    type="radio"
                    name="locType.houseType"
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
              {!locaA_houseType && (
                <div>
                  <Floor
                    locaA_houseType={locaA_houseType}
                    name="locType.floor"
                  />
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
