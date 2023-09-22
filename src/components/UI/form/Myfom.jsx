import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { fetchCities } from '../../../API/WeatherService'
import { useDebouncedCallback } from 'use-debounce'

const Myfom = ({ handleClick }) => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(false)

  const handleSubmit = (e, city) => {
    setValue('')
    handleClick(e, city)
  }
  const autoComplete = (e, val) => {
    e.preventDefault()

    if (val === '') {
      setCountries([])
    } else {
      setFetching(true)
      fetchCities(val).then((data) => {
        let res = data.map((el) => {
          let lat = el.latitude
          let lon = el.longitude
          let name = el.name
          let country = el.country

          return { country, lat, lon, name }
        })
        setCountries(res)
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
    150
  )
  return (
    <form action="submit" onSubmit={(e) => handleSubmit(e, countries[0])}>
      <label>
        <input
          type="text"
          value={value}
          placeholder="Select city"
          onChange={(e) => {
            setValue(e.target.value)
            debounced(e, e.target.value)
          }}
          className="app__input"
          onSubmit={(e) => handleSubmit(e)}
        />
      </label>
      <button
        className={`app__search`}
        onClick={(e) => handleSubmit(e, countries[0])}
      >
        <BiSearchAlt color="white" size={'30px'} />
      </button>
      {value && countries.length ? (
        <div
          className=""
          style={{
            position: 'absolute',
            top: 50,
            color: 'rgba(255,255,255,0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#405767',
            border: '3px solid white',
            borderRadius: '10px',
          }}
        >
          {fetching
            ? 'loading ...'
            : value !== '' &&
              countries.map((el, index) => (
                <>
                  <div
                    key={index}
                    className=""
                    style={{
                      border: '3px solid transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 3,
                    }}
                  >
                    <button
                      style={{ padding: 3 }}
                      onClick={(e) => {
                        handleSubmit(e, el)
                      }}
                    >
                      <span>{el.country}</span> / <span>{el.name}</span>
                    </button>
                  </div>
                </>
              ))}
        </div>
      ) : (
        ''
      )}
    </form>
  )
}

export default Myfom
