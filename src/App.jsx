import { useEffect, useState } from 'react'
import { FetchingEightDays } from './API/WeatherService'
import './styles/Global.css'
import WeatherCard from './components/weatherCard/WeatherCard'

function App() {
  const [value, setValue] = useState('')
  const [currWeather, setCurrWeather] = useState({})
  const handleClick = (e) => {
    e.preventDefault()
    FetchingEightDays(value).then((data) => {
      setCurrWeather(data)
      console.log(data)
    })

    setValue('')
  }
  useEffect(() => {
    // getCity('donetsdsadk').then((data) => console.log(data))
    // getweather().then((data) => console.log(data))
    // Fetching().then((data) => console.log(data))
    // test('KiEv').then((data) => console.log(data))
    // console.log(Date.now())
    // Fetching().then((data) => console.log(data))
    // FetchingEightDays('lviv').then((data) =>
    //   console.log(timeConverter(data.current.dt))
    // )
    // const timestampMillis = Date.now()
    // const valentines = new Date(Date.now()).getDate()
    // const month = valentines.getMonth()
    // console.log(valentines)
    // console.log(timeConverter(1695235531))
    // Convert milliseconds to seconds
    // const timestampSeconds = Math.floor(timestampMillis / 1000)
    // console.log('Unix timestamp in milliseconds:', timestampMillis)
    // console.log('Unix timestamp in seconds:', timestampSeconds)
    // console.log(timestampMillis.getMonth())
  }, [])
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

      <div className="weather__wrapper">
        <WeatherCard weather={currWeather} />
      </div>
    </div>
  )
}

export default App
