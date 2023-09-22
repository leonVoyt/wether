import React from 'react'
import styles from '../currWeatherCard/CurrWeatherCard.module.css'
import { WeatherType } from '../weatherType/WeatherType'
import { useDate } from '../../hooks/useDate'
import { MdNightlight } from 'react-icons/md'
import { TbSunset2 } from 'react-icons/tb'
import { WiDaySunny } from 'react-icons/wi'
import { MdOutlineNightlightRound } from 'react-icons/md'
import { WiMoonrise } from 'react-icons/wi'
import { WiSunrise } from 'react-icons/wi'
import { WiSunset } from 'react-icons/wi'
import { LuWind } from 'react-icons/lu'
import { BsArrowDown } from 'react-icons/bs'
const WeatherCard = React.memo(({ weather }) => {
  const { day, date, month } = useDate(weather.dt)
  const { hour, min } = useDate(weather.moonrise)
  const { hour: sunriseHour, min: sunriseMin } = useDate(weather.sunrise)
  const { hour: sunsetHour, min: sunsetMin } = useDate(weather.sunset)

  return (
    <div
      className={styles.card + ' ' + 'animation'}
      data-testid="card-item-eight"
    >
      <div className={styles.front}>
        <div className={styles.image}>
          <WeatherType weatherType={weather.weather[0].main} color="white" />
        </div>
        <div>
          {day} / {date} / {month}
        </div>

        <span>clouds : {weather.clouds} %</span>
        <span>Temp : </span>
        <div style={{ display: 'flex', columnGap: 12 }}>
          <p className={styles.textFlex}>
            <TbSunset2 color="white" />
            {Math.round(weather.temp.morn)}
          </p>
          <p className={styles.textFlex}>
            <WiDaySunny color="white" />
            {Math.round(weather.temp.day)}
          </p>
          <p className={styles.textFlex}>
            <MdOutlineNightlightRound color="white" />
            {Math.round(weather.temp.eve)}
          </p>
          <p className={styles.textFlex}>
            <MdNightlight color="white" />
            {Math.round(weather.temp.night)}
          </p>
        </div>
        <span>Feels like : </span>

        <div style={{ display: 'flex', columnGap: 12 }}>
          <p className={styles.textFlex}>
            <TbSunset2 color="white" />
            {Math.round(weather.feels_like.morn)}
          </p>
          <p className={styles.textFlex}>
            <WiDaySunny color="white" />
            {Math.round(weather.feels_like.day)}
          </p>
          <p className={styles.textFlex}>
            <MdOutlineNightlightRound color="white" />
            {Math.round(weather.feels_like.eve)}
          </p>
          <p className={styles.textFlex}>
            <MdNightlight color="white" />
            {Math.round(weather.feels_like.night)}
          </p>
        </div>
      </div>

      <div className={styles.back}>
        <div className={styles.mainText}>
          <h3>{weather.summary}</h3>
        </div>

        <div className={styles.textFlex}>
          <WiSunrise color="white" size={30} />
          {sunriseHour < 9 ? '0' + sunriseHour : sunriseHour} :{' '}
          {sunriseMin < 9 ? '0' + sunriseMin : sunriseMin}
        </div>
        <div className={styles.textFlex}>
          <WiSunset color="white" size={30} />
          {hour < 9 ? '0' + hour : hour} : {min < 9 ? '0' + min : min}
        </div>
        <div className={styles.textFlex}>
          <WiMoonrise color="white" size={30} />
          {sunsetHour < 9 ? '0' + sunsetHour : sunsetHour} :{' '}
          {sunsetMin < 9 ? '0' + sunsetMin : sunsetMin}
        </div>
        <div className={styles.textFlex}>
          <LuWind color="white" />
          {weather.wind_speed} m/s - {weather.wind_gust} m/s
          <BsArrowDown
            color="white"
            style={{ rotate: `${180 + weather.wind_deg}deg` }}
          />
        </div>
      </div>
    </div>
  )
})

export default WeatherCard
