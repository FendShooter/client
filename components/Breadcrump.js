import React from 'react'

export default function BreadCrump({ pathname }) {
  return (
    <div className="wrap_center mt-4 flex  items-center  space-x-2 pl-3">
      <span className="text-primary">Home</span>
      {pathname === 'getquote' ? (
        ''
      ) : (
        <>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 18 18"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span>{pathname}</span>
        </>
      )}
    </div>
  )
}
