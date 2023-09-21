import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const Mybutton = ({ offset, setOffset, value, rotate }) => {
  //   console.log(value > 0 ? 4 : 0)

  return (
    <button
      className={`button ${
        value > 0
          ? offset > 7 - value
            ? 'disable'
            : ''
          : offset < 1
          ? 'disable'
          : ''
      }`}
      onClick={() => {
        setOffset((prev) => prev + value)
      }}
    >
      <MdOutlineKeyboardDoubleArrowRight
        color="white"
        size={50}
        style={{ rotate: `${rotate}deg` }}
      />
    </button>
  )
}

export default Mybutton
