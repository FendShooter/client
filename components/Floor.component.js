import { Field } from 'formik'

export default function Floor({ locA_houseElevator, name }) {
  return (
    <div>
      {locA_houseElevator && (
        <div className="form_group">
          <Field as="select" name={name}>
            <option value="" checked>
              select floor
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </Field>
        </div>
      )}
    </div>
  )
}
