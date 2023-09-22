import axios from 'axios'

export const getCity = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2f5fde1104b4b90a76dc69856cbdd7b4`
    )
    if (response.data[0]) return response.data[0]
    throw console.error('wrong city input!')
  } catch (error) {
    throw new Error('wrong city input')
  }
}

export const FetchingEightDays = async (city) => {
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

export const test = async (city) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=2f5fde1104b4b90a76dc69856cbdd7b4`
    )
    return response.data
  } catch (error) {}
}
