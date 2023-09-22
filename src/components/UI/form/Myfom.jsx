import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { fetchCities } from '../../../API/WeatherService'
import { useDebouncedCallback } from 'use-debounce'

const Myform = ({ handleClick, handleClickFetchAny }) => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(false)

  const handleSubmit = (e, city) => {
    e.preventDefault()
    if (countries.length) {
      setValue('')
      handleClick(e, city)
    } else {
      setCountries([])
      handleClickFetchAny(value)
      setValue('')
    }
  }
  const autoComplete = (e, val) => {
    e.preventDefault()

    if (val === '') {
      setCountries([])
    } else {
      setFetching(true)
      fetchCities(val).then((data) => {
        if (data.length) {
          let res = data.map((el) => {
            let lat = el.latitude
            let lon = el.longitude
            let name = el.name
            let country = el.country

            return { country, lat, lon, name }
          })
          setCountries(res)
        } else {
          setCountries([])
        }
        setFetching(false)
      })
    }
  }
  const debounced = useDebouncedCallback(
    // function
    (e, val) => {
      autoComplete(e, val)
    },
    // delay in ms
    500
  )
  return (
    <form action="submit" onSubmit={(e) => handleSubmit(e, countries[0])}>
      <label>
        <input
          data-testid="input-item"
          type="text"
          value={value}
          placeholder="Select city"
          onChange={(e) => {
            setValue(e.target.value)
            debounced(e, e.target.value)
          }}
          className="app__input"
        />
      </label>
      <button
        data-testid="search-item"
        className={`app__search`}
        onClick={(e) => {
          handleSubmit(e, countries[0])
        }}
      >
        <BiSearchAlt color="white" size={'30px'} />
      </button>
      {value && countries.length ? (
        <div className="app__form--modal">
          {fetching
            ? 'loading ...'
            : value !== '' &&
              countries.map((el, index) => (
                <div key={index} className="modal__item">
                  <button
                    className="modal__item--button"
                    onClick={(e) => {
                      handleSubmit(e, el)
                    }}
                  >
                    <span>{el.country}</span> / <span>{el.name}</span>
                  </button>
                </div>
              ))}
        </div>
      ) : (
        ''
      )}
    </form>
  )
}

export default Myform
