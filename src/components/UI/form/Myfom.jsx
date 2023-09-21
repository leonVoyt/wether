import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const Myfom = ({ handleClick }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    handleClick(e, value)
    setValue('')
  }

  return (
    <form action="submit" onSubmit={(e) => handleSubmit(e)}>
      <label>
        <input
          type="text"
          value={value}
          placeholder="Select city"
          onChange={(e) => setValue(e.target.value)}
          className="app__input"
          onSubmit={(e) => handleSubmit(e)}
        />
      </label>
      <button className={`app__search`} onClick={(e) => handleSubmit(e)}>
        <BiSearchAlt color="white" size={'30px'} />
      </button>
    </form>
  )
}

export default Myfom
