import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import {
  FetchingEightDaysFromAutoInp,
  ninja,
  test,
} from '../../../API/WeatherService'

const Myfom = ({ handleClick }) => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [fetching, setFetching] = useState(false)

  // const handleSubmit = (e, value) => {
  //   handleClick(e, value)
  // }

  const s = (e, val) => {
    e.preventDefault()

    if (val === '') {
      setCountries([])
    } else {
      setFetching(true)
      ninja(val).then((data) => {
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
  return (
    <form action="submit" onSubmit={(e) => s(e)}>
      <label>
        <input
          type="text"
          value={value}
          placeholder="Select city"
          onChange={(e) => {
            setValue(e.target.value)
            s(e, e.target.value)
          }}
          className="app__input"
          onSubmit={(e) => s(e)}
        />
      </label>
      <button className={`app__search`} onClick={(e) => s(e)}>
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
            ? 'load'
            : value !== '' &&
              countries.map((el) => (
                <>
                  <div
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
                        handleClick(e, el)
                        setValue('')
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
