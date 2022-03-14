import React from 'react'
import StarRating from 'react-svg-star-rating'
function Reviews({ firstName, lastName, review, rate, date }) {
  console.log('hh')
  return (
    <div className="flex space-x-4 border-t-2  pt-4  pb-4">
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full  bg-pink-600 text-5xl uppercase text-white md:h-20 md:w-20">
        {firstName.charAt(0)}
      </div>
      <div>
        <header>
          <div className="text-xl font-semibold">
            {firstName} {lastName}
          </div>
          <div className="my-2 flex flex-col space-y-1 md:items-center">
            <span className="block">
              <StarRating
                isReadOnly
                activeColor={'#EA7F33'}
                initialRating={rate}
                unit="half"
                size={18}
                containerClassName="flex"
              />
            </span>
            <span className="text-sm text-slate-500">
              {new Date(date).toLocaleDateString('US-en', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
              })}
            </span>
          </div>
        </header>
        <div className=" text-xl text-[rgb(118,121,124)]">{review}</div>
      </div>
    </div>
  )
}

export default React.memo(Reviews)
