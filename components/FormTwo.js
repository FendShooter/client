import React, { useContext, useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialDestination, destSchemaValidator } from '../schema/quote.schema'
import OnerrorForm from './Onerror.form'

import InputField from './InputField'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Context } from '../context'
import ChoiceC from './ChoiceC'
import ChoiceD from './ChoiceD'
import Floor from './Floor.component'
import { Persist } from 'formik-persist'

export default function FormTwo() {
  const router = useRouter()
  useEffect(() => {
    router.push('/getquote/?step-2')
  }, [])
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
    <div className="my-10">
      <Formik
        initialValues={initialDestination}
        validationSchema={destSchemaValidator}
        onSubmit={async (values) => {
          goNext()
          store.set('locB', { value: values })
          console.log(values)
        }}
      >
        {({ values }) => (
          <Form autoComplete="off">
            <div className="form_group">
              <InputField type="text" name="addressTo" req="req" />
              <ErrorMessage name="addressTo" component={OnerrorForm} />
            </div>
            <div className=" flex space-x-4">
              <div className="w-1/2">
                <InputField
                  type="text"
                  name="zipCodeB"
                  req="req"
                  className="w-full"
                />
                <ErrorMessage name="zipCodeB" component={OnerrorForm} />
              </div>
              <div className="w-1/2">
                <InputField
                  type="text"
                  name="cityB"
                  req="req"
                  className="w-full"
                />
                <ErrorMessage name="cityB" component={OnerrorForm} />
              </div>
            </div>
            <div className="form_group">
              <div className="md:ui">
                <ChoiceC />
                <ChoiceD />
              </div>
              <Floor
                locA_houseElevator={locB_houseElevator}
                name="locTypeB.floor"
              />
            </div>
            <div className="form_group">
              <InputField
                type="date"
                name="date"
                req="req"
                className="w-full"
              />
              <ErrorMessage name="date" component={OnerrorForm} />
            </div>
            {/* note */}
            <div className="form_group">
              <label htmlFor="list" className="label">
                Note : <span className="">(optional)</span>:
              </label>
              <Field
                as="textarea"
                id="note"
                name="note"
                className="resize-none"
              />
              <ErrorMessage name="note" component={OnerrorForm} />
            </div>

            <div className="my-6 flex items-center justify-between">
              <button
                type="submit"
                onClick={goNext}
                className="w-24 bg-primary py-2 px-4 text-white"
              >
                Next
              </button>
            </div>
            <Persist name="location-b" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

// {/* <div>{JSON.stringify(values)}</div> */}
