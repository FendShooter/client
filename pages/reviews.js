import { Formik, Form, ErrorMessage, Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { reviewValidator, reviewInitial } from '../schema/quote.schema'
import StarRating from 'react-svg-star-rating'
import { apiRequests } from '../services/apiResquests'
import Title from '../components/Title'
import OnerrorForm from '../components/Onerror.form'
import Reviews from '../components/Reviews'

export default function ReviewPage() {
  const [newReview, setNewReview] = useState(false)
  const [reviewData, setReviewData] = useState({
    reviews: [],
    count: 0,
    initialRating: 0,
  })
  const { count, initialRating, reviews } = reviewData

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await apiRequests.get('/review')
        setNewReview(false)
        if (response.status === 200) {
          setReviewData({
            ...reviewData,
            reviews: response.data.review,
            count: response.data.count,
            initialRating: response.data.initialRating,
          })
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchReview()
  }, [newReview])

  const [rating, setRating] = useState(2.5)
  const [writeReview, setWriteReview] = useState(false)
  const handleOnClick4 = (rate) => {
    setRating(rate)
  }
  return (
    <div className="wrap_center p-4">
      <Title size="text-3xl text-center" text="Our reviews" />
      <div className=" mx-auto max-w-md rounded-md p-4 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:space-x-4">
            <h1 className=" text-6xl font-bold">{initialRating?.toFixed(1)}</h1>
            <div className="flex flex-col items-center justify-center">
              <StarRating
                isReadOnly
                activeColor={'#00395E'}
                initialRating={initialRating}
                unit="half"
                size={25}
                containerClassName="flex my-2 justify-center"
              />
              <p> {count} reviews</p>
            </div>
          </div>
          <div className="my-4">
            <button
              type="submit"
              onClick={() => setWriteReview(true)}
              className="  rounded-md bg-[#1976D2] py-2 px-4 font-bold text-white"
            >
              WRITE A REVIEW
            </button>
          </div>
        </div>
      </div>
      {writeReview && (
        <div className="mx-auto  max-w-xl">
          <Formik
            initialValues={reviewInitial}
            validationSchema={reviewValidator}
            onSubmit={async (values, actions) => {
              try {
                const response = await apiRequests.post('/review', {
                  ...values,
                  rate: rating,
                })
                if (response.status === 200) {
                  setNewReview(true)
                  actions.resetForm()
                }
              } catch (error) {
                console.log(response.error)
              }
            }}
          >
            <Form>
              <section className="mt-6 ">
                <h3>Tap a star to rate</h3>
                <StarRating
                  unit="half"
                  handleOnClick={handleOnClick4}
                  initialRating={2.5}
                  containerClassName="flex my-2  "
                />
              </section>
              <div className="form_group">
                <label htmlFor="firstName" className="label">
                  First Name:
                </label>
                <Field
                  type="text"
                  name="firstName"
                  className="w-full"
                  id="firstName"
                />
                <ErrorMessage name="firstName" component={OnerrorForm} />
              </div>
              <div className="form_group">
                <label htmlFor="lastName" className="label">
                  Last name:
                </label>
                <Field
                  type="text"
                  name="lastName"
                  className="w-full"
                  id="lastName"
                />
                <ErrorMessage name="lastName" component={OnerrorForm} />
              </div>
              <div className="form_group">
                <label htmlFor="reviews" className="label">
                  Reviews:
                </label>
                <Field
                  as="textarea"
                  name="review"
                  className="w-full resize-none"
                  id="reviews"
                />
                <ErrorMessage name="review" component={OnerrorForm} />
              </div>
              <button
                type="submit"
                className="w-24 bg-primary py-2 px-4 text-white"
              >
                {newReview ? 'SENT' : 'SUBMIT'}
              </button>
            </Form>
          </Formik>
        </div>
      )}
      <div className="mx-auto mt-10 max-w-xl">
        {reviews &&
          reviews.map((review) => <Reviews key={review._id} {...review} />)}
      </div>
    </div>
  )
}
