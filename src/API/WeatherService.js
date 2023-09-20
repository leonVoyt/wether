import axios from 'axios'

export const getCity = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2f5fde1104b4b90a76dc69856cbdd7b4`
    )
    if (response.data[0]) return response.data[0]
    throw console.error('wrong city input!')
  } catch (error) {
    throw alert('wrong city')
  }
}

// export const getWether = async () => {
//   try {
//     const response = await axios.get(
//       'https://api.openweathermap.org/data/3.0/onecall?lat=50.4500336&lon=30.5241361&exclude=hourly,daily&appid=2f5fde1104b4b90a76dc69856cbdd7b4'
//     )
//     return response.data
//   } catch (error) {}
// }
// export const Fetching = async (limit = 12) => {
//   const response = await axios.get(
//     'http://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=2f5fde1104b4b90a76dc69856cbdd7b4&units=metric'
//   )

//   return response.data
// }

// export const test = async (city) => {
//   try {
//     const { lat, lon, country, name } = await getCity(city)
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=${lat}&lon=${lon}&date=2023-09-20&appid=2f5fde1104b4b90a76dc69856cbdd7b4&units=metric`
//     )

//     return { ...response.data, country, name }
//   } catch (error) {}
// }

export const Fetching = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=kiev&cnt=24&appid=2f5fde1104b4b90a76dc69856cbdd7b4&units=metric`
  )

  return response.data
}

export const FetchingEightDays = async (city) => {
  //8 days
  try {
    const { lat, lon, country, name } = await getCity(city)

    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=2f5fde1104b4b90a76dc69856cbdd7b4&units=metric`
    )

    return { ...response.data, country, name }
  } catch (error) {
    alert(error)
  }
}
