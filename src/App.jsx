import { useEffect, useState } from 'react'
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
import bg from './assets/background.jpg'

function App() {
  const [currWeather, setCurrWeather] = useState(null)
  const [currCity, setCurrCity] = useState([])
  const [weatherForManyDays, setWeatherForManyDays] = useState([])
  const [offset, setOffset] = useState(0)
  const [typeOfDisplay, setTypeOfDisplay] = useState(true)
  const [countCard, setCountCard] = useState(4)
  const size = useResize()
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const handleClickFetchEng = (el) => {
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
    })
  }

  useEffect(() => {
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

  useEffect(() => {
    const backgroundImage = new Image()
    backgroundImage.src = bg
    backgroundImage.onload = () => {
      setBackgroundLoaded(true)
    }
  }, [])

  if (!backgroundLoaded) {
    return <div className="loader"></div>
  }

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
          <h1 style={{ fontSize: '2rem', color: 'white' }}>
            {currCity.length ? `${currCity[0]}` : ''}
          </h1>
          <h1 style={{ fontSize: '2rem', color: 'white' }}>
            {currCity.length ? `/` : ''}
          </h1>
          <h1 style={{ fontSize: '2rem', color: 'white' }}>
            {currCity.length ? `${currCity[1]}` : ''}
          </h1>
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
