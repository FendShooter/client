import { useField } from 'formik'
import React from 'react'
const InputField = (props) => {
  const [field] = useField({
    name: props.name,
    value: props.value,
    type: props.type || 'text',
  })

  return (
    <>
      <label htmlFor={props.name} className="label">
        {props.name} {props.req && <span className="text-red-500">*</span>}
      </label>
      <input {...field} {...props} />
    </>
  )
}

export default React.memo(InputField)
