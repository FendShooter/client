import React from 'react'

export default function InputReview({ data }) {
  return (
    <div>
      <h1 className="text-2xl text-slate-400">Current Location :</h1>
      <p className="my-2 flex space-x-4">
        <span className="inline-block">Contact: </span>
        <span className="inline-block">{contact}</span>
      </p>
      <p className="my-2 flex space-x-4 ">
        <span className="inline-block">Address: </span>
        <span className="inline-block">
          {addressFrom} {city} {zipCode}
        </span>
      </p>
      <p className="my-2 flex space-x-4 ">
        <span className="inline-block">Type: </span>
        <span className="inline-block">{houseType}</span>
      </p>
      <div className="flex space-x-4">
        <div className="flex space-x-4">
          <span className="inline-block">Elevator: </span>
          <span className="inline-block">
            {elevator === 'false' ? 'na' : 'Yes'}
          </span>
        </div>
        <span>|</span>
        <div className="flex space-x-4">
          <span className="inline-block">Floor: </span>
          <span className="inline-block">{!floor ? 'na' : floor}</span>
        </div>
      </div>
      <p className="my-2 flex space-x-4 ">
        <span className="inline-block">Date: </span>
        <span className="inline-block">{date}</span>
      </p>
      <p className="my-2 flex space-x-4 ">
        <span className="inline-block">List: </span>
        <span className="inline-block">{list}</span>
      </p>
      {note && (
        <p className="my-2 flex space-x-4 ">
          <span className="inline-block">Note: </span>
          <span className="inline-block">{note}</span>
        </p>
      )}
    </div>
  )
}
