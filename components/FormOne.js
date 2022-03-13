import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import { useContext, useEffect, useLayoutEffect } from 'react'
import { Context } from '../context'
import { initialValues, quoteValidator } from '../schema/quote.schema'
import InputField from './InputField'
import Choice from './Choice'
import ChoiceB from './ChoiceB'
import Floor from './Floor.component'
import OnerrorForm from './Onerror.form'
import { useRouter } from 'next/router'

import { Persist } from 'formik-persist'
function FormOne() {
  const router = useRouter()
  const { local_A, step, goNext } = useContext(Context)
  const { locA_houseElevator } = local_A
  useEffect(() => {
    router.push('getquote/?step-1')
  }, [])
  return (
    <div className="my-10">
      <Formik
        initialValues={initialValues}
        validationSchema={quoteValidator}
        isInitialValid={false}
        onSubmit={async (values) => {
          goNext()
          store.set('user', { value: values })
        }}
      >
        {({ values }) => (
          <Form autoComplete="off">
            <div className="form_group">
              <label htmlFor="contact" className="label">
                Contact: (Email or phone Number)
                <span className="ml-1  text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="contact"
                autoComplete="off"
                className="border-2 border-rose-500 focus:ring-0"
              />
              <ErrorMessage name="contact" component={OnerrorForm} />
            </div>
            <div className="form_group">
              <InputField
                type="text"
                name="addressFrom"
                req="req"
                className="w-full"
              />
              <ErrorMessage name="addressFrom" component={OnerrorForm} />
            </div>

            <div className=" flex space-x-4">
              <div className="w-1/2">
                <InputField
                  type="text"
                  name="zipCode"
                  className="w-full"
                  req="req"
                />
                <ErrorMessage name="zipCode" component={OnerrorForm} />
              </div>
              <div className="w-1/2">
                <InputField
                  type="text"
                  name="city"
                  className="w-full"
                  req="req"
                />
                <ErrorMessage name="city" component={OnerrorForm} />
              </div>
            </div>
            {/* house */}
            <div className="form_group">
              <div className="md:ui">
                <Choice />
                <ChoiceB />
              </div>
            </div>

            {/* //#endregion */}
            <div className="form_group">
              <label htmlFor="list" className="label">
                List <span className="text-red-500">*</span>:
              </label>
              <Field
                as="textarea"
                id="list"
                name="list"
                className="h-40 resize-none"
                placeholder="Tv, bed etc..."
              />
              <ErrorMessage name="list" component={OnerrorForm} />
            </div>

            <div className="my-6 flex items-center justify-end">
              <button
                type="submit"
                className="w-24 bg-primary py-2 px-4 text-white"
              >
                Next
              </button>
            </div>
            <Persist name="location-a" />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormOne
