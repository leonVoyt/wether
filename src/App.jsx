import { useEffect, useState } from 'react'
import { FetchingEightDays } from './API/WeatherService'
import './styles/Global.css'
import WeatherCard from './components/weatherCard/WeatherCard'

function App() {
  const [value, setValue] = useState('')
  const [currWeather, setCurrWeather] = useState({})
  const [currCity, setCurrCity] = useState([])
  const handleClick = (e) => {
    e.preventDefault()
    FetchingEightDays(value).then((data) => {
      if (!data) {
        return ''
      }
      setCurrWeather(data)
      const country = data.country
      const city = data.name

      setCurrCity([country, city])
    })

    setValue('')
  }

  return (
    <div className="app">
      <div className="">
        <form action="submit" onSubmit={(e) => handleClick(e)}>
          <label>
            <input
              type="text"
              value={value}
              placeholder="Select city"
              onChange={(e) => setValue(e.target.value)}
              className="app__input"
              onSubmit={(e) => handleClick(e)}
            />
          </label>
        </form>
        <button onClick={(e) => handleClick(e)}>Set</button>
      </div>
      <h1>{currCity.length ? `${currCity[0]} / ${currCity[1]} ` : 'Select'}</h1>
      <div className="weather__wrapper">
        <WeatherCard weather={currWeather} />
      </div>
    </div>
  )
}

export default App
