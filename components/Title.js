import React from 'react'

export default function Title({ size, text }) {
  return (
    <h2 className={`my-4 font-bold  uppercase text-primary ${size}`}>{text}</h2>
  )
}
