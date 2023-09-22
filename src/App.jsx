import { useEffect, useLayoutEffect, useState } from 'react'
import {
  FetchingEightDays,
  FetchingEightDaysFromAutoInp,
} from './API/WeatherService'
import './styles/Global.css'
import CurrWeatherCard from './components/currWeatherCard/CurrWeatherCard'
import WeatherCard from './components/weatherCard/WeatherCard'
import Mybutton from './components/UI/button/Mybutton'
import Myform from './components/UI/form/Myfom'
import useResize from './hooks/useResize'

function App() {
  const [currWeather, setCurrWeather] = useState(null)
  const [currCity, setCurrCity] = useState([])
  const [weatherForManyDays, setWeatherForManyDays] = useState([])
  const [offset, setOffset] = useState(0)
  const [typeOfDisplay, setTypeOfDisplay] = useState(true)
  const [countCard, setCountCard] = useState(4)
  const size = useResize()
  console.log(process.env)

  const handleClickFetchEng = (e, el) => {
    e.preventDefault()
    if (!el) {
      return ''
    }
    FetchingEightDaysFromAutoInp(el).then((data) => {
      if (!data) {
        return ''
      }
      setCurrWeather(data)
      const country = data.country
      const city = data.name
      setCurrCity([country, city])
      setWeatherForManyDays(data.daily)
    })
  }
  const handleClickFetchAny = (value) => {
    if (!value) {
      return null
    }
    FetchingEightDays(value).then((data) => {
      if (!data) {
        return ''
      }
      setCurrWeather(data)
      const country = data.country
      const city = data.name
      setCurrCity([country, city])
      setWeatherForManyDays(data.daily)
      console.log(data)
    })
  }

  useLayoutEffect(() => {
    if (size > 1310) {
      setCountCard(4)
    } else if (size > 1050) {
      setCountCard(3)
    } else if (size > 785) {
      setCountCard(2)
    } else {
      setCountCard(1)
    }
  }, [size])

  return (
    <div className="app">
      <div className="shadow"></div>
      <div className="app__navigation">
        <Myform
          handleClick={handleClickFetchEng}
          handleClickFetchAny={handleClickFetchAny}
        />

        <div
          className={`app__toogle ${!typeOfDisplay ? 'eight' : ''}`}
          onClick={() => setTypeOfDisplay(!typeOfDisplay)}
          data-testid="button-toogle-type"
        >
          <div className="app__toogle--type">Current</div>
          <div className="app__toogle--type">8day`s</div>
        </div>
        <div className="app__navigation--current">
          <h1>{currCity.length ? `${currCity[0]} / ${currCity[1]} ` : ''}</h1>
        </div>
      </div>

      <div className="weather__wrapper">
        {typeOfDisplay ? (
          <CurrWeatherCard weather={currWeather} />
        ) : weatherForManyDays.length ? (
          <>
            <Mybutton
              offset={offset}
              setOffset={setOffset}
              rotate={180}
              value={-countCard}
            />
            {weatherForManyDays.map(
              (el, index) =>
                index >= offset &&
                index < offset + countCard && (
                  <WeatherCard weather={el} key={index} />
                )
            )}
            <Mybutton
              offset={offset}
              setOffset={setOffset}
              rotate={360}
              value={countCard}
            />
          </>
        ) : (
          <CurrWeatherCard weather={currWeather} />
        )}
      </div>
    </div>
  )
}

export default App
