import React, { useEffect, useState } from 'react'
import styles from './CurrWeatherCard.module.css'
import { useDate } from '../../hooks/useDate'
import { WeatherType } from '../weatherType/WeatherType'
import { LuWind } from 'react-icons/lu'
import { MdNightlight } from 'react-icons/md'
import { TbSunset2 } from 'react-icons/tb'
import { WiDaySunny } from 'react-icons/wi'
import { WiHumidity } from 'react-icons/wi'
import { CiTempHigh } from 'react-icons/ci'
import { MdOutlineNightlightRound } from 'react-icons/md'
import MyCard from '../UI/card/MyCard'

const CurrWeatherCard = React.memo(({ weather }) => {
  const { day, date, month } = useDate(Date.now() / 1000)
  console.log(weather)

  return weather ? (
    <div className={styles.wrapper} data-testid="card-item">
      <div className={styles.card}>
        <div className={styles.front}>
          <div>
            {day} / {date} / {month}
          </div>
          <div className={styles.type}>
            {weather.current.weather[0].description}
          </div>
          <div className={styles.image}>
            <WeatherType
              weatherType={weather.current.weather[0].main}
              color="white"
            />
          </div>
          <div className={styles.textFlex}>
            current <CiTempHigh color="white" /> :{' '}
            {Math.round(weather.current.temp)} °C
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.mainText}>
            {' '}
            <h3>{weather.daily[0].summary}</h3>
          </div>
          <div className="">
            <p>Max : {Math.round(weather.daily[0].temp.max)} °C</p>
            <p>Min : {Math.round(weather.daily[0].temp.min)} °C</p>
          </div>
          <div style={{ display: 'flex', columnGap: 12 }}>
            <p className={styles.textFlex}>
              <TbSunset2 color="white" />
              {Math.round(weather.daily[0].temp.morn)}
            </p>
            <p className={styles.textFlex}>
              <WiDaySunny color="white" />
              {Math.round(weather.daily[0].temp.day)}
            </p>
            <p className={styles.textFlex}>
              <MdOutlineNightlightRound color="white" />
              {Math.round(weather.daily[0].temp.eve)}
            </p>
            <p className={styles.textFlex}>
              <MdNightlight color="white" />
              {Math.round(weather.daily[0].temp.night)}
            </p>
          </div>
          <div className="">
            <p className={styles.textFlex}>
              <WiHumidity color="white" /> : {weather.current.humidity} %
            </p>
          </div>

          <div className={styles.wind}>
            <p className={styles.textFlex}>
              Avr
              {'  '}
              {weather.daily[0].wind_speed} m/sec
              {'  '}
              <LuWind color="white" />
            </p>
            <p className={styles.textFlex}>
              Gust
              {'  '}
              {weather.daily[0].wind_gust}
              {'  '}
              m/sec
              {'  '}
              <LuWind color="white" />
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <MyCard>Here will be weather info </MyCard>
  )
})

export default CurrWeatherCard
