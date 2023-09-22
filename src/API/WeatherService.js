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

export const FetchingEightDaysFromAutoInp = async ({
  lat,
  lon,
  country,
  name,
}) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=2f5fde1104b4b90a76dc69856cbdd7b4&units=metric`
    )

    return { ...response.data, country, name }
  } catch (error) {
    alert(error)
  }
}

export const fetchCities = async (name) => {
  let response = await axios.get(
    `https://api.api-ninjas.com/v1/city?name=${name}&limit=5`,
    {
      headers: { 'X-Api-Key': 'fzUOFG/JJb/ECLEk2CdHwg==gO24XNS3GhNQB7Nj' },
    }
  )
  return response.data
}
