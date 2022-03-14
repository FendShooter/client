import * as Yup from 'yup'

export const initialValues = {
  contact: '',
  addressFrom: '',
  city: '',
  zipCode: '',
  locType: {
    houseType: '',
    elevator: true,
    floor: '',
  },
  list: '',
}

export const quoteValidator = Yup.object().shape({
  contact: Yup.string().required('Required'),
  addressFrom: Yup.string().required('required'),
  city: Yup.string().required('required'),
  zipCode: Yup.string().required('required'),
  locType: Yup.object({
    elevator: Yup.boolean().default(true),
    houseType: Yup.string().oneOf(['house', 'apartment']),
    floor: Yup.string().when('elevator', {
      is: true,
      then: Yup.string().required('required'),
      otherwise: Yup.string().default('false'),
    }),
  }),
  list: Yup.string().required('required'),
})
export const destSchemaValidator = Yup.object().shape({
  addressTo: Yup.string().required('required'),
  cityB: Yup.string().required('required'),
  zipCodeB: Yup.string().required('required'),
  locTypeB: Yup.object({
    elevator: Yup.boolean().default(true),
    houseType: Yup.string().oneOf(['house', 'apartment']),
    floor: Yup.string().when('elevator', {
      is: true,
      then: Yup.string().required('required'),
      otherwise: Yup.string().default('false'),
    }),
  }),
  note: Yup.string(),
  date: Yup.date().default(() => new Date()),
})

export const initialDestination = {
  addressTo: '',
  cityB: '',
  zipCodeB: '',
  locTypeB: {
    elevator: true,
    houseType: '',
    floor: '',
  },
  note: '',
  date: new Date(),
}


export const reviewInitial = {
  firstName: '',
  lastName: '',
  review: '',
}

export const reviewValidator = Yup.object().shape({
  firstName: Yup.string().trim().required('Required'),
  lastName: Yup.string().trim().required('Required'),
  review: Yup.string().trim().required('Required'),
})