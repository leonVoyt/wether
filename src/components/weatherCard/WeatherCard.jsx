import React, { useEffect, useRef, useState } from 'react'
import styles from './WeatherCard.module.css'
import { useDate } from '../../hooks/useDate'
import { WeatherType } from '../WeatherType'
const weatherCard = React.memo(({ weather }) => {
  const [dayOfWeek, setDayOfWeek] = useState('')
  const [active, setActive] = useState(false)
  // const typeWeather = useWeatherType('Clouds')
  const date = useDate(Date.now() / 1000)
  const handleClick = () => {
    setActive(!active)
  }
  useEffect(() => {
    // console.log(typeWeather())
    setDayOfWeek(date)

    // setDayOfWeek(timeConverter(Date.now() / 1000))
  }, [weather])

  return weather.current ? (
    <div className={styles.wrapper}>
      <div className={styles.second}>'leon'</div>
      <div
        className={`${styles.card} ${active ? styles.active : ''}`}
        onClick={() => handleClick()}
      >
        <div className="">
          {weather.country} / {weather.name}
        </div>
        <div className="">
          {' '}
          <h3>{weather.daily[0].summary}</h3>
        </div>
        <WeatherType
          weatherType={weather.current.weather[0].main}
          color="white"
        />
        <div className={styles.city}>{dayOfWeek}</div>
        <div className="">humidity : {weather.current.humidity} %</div>
        <div className="">temp : {Math.round(weather.current.temp)} °C</div>
        <div className="">
          weather desc: {weather.current.weather[0].description}
        </div>

        <div className="">Wind : {weather.current.wind_speed} m/sec</div>
      </div>
    </div>
  ) : (
    <>
      <div className={styles.card}>Select city</div>
    </>
  )
})

export default weatherCard
