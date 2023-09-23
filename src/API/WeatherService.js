import axios from 'axios'

export const getCity = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_SECRET_KEY_OPENWEATHER}`
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
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_SECRET_KEY_OPENWEATHER}&units=metric`
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
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_SECRET_KEY_OPENWEATHER}&units=metric`
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
      headers: { 'X-Api-Key': process.env.REACT_APP_API_SECRET_KEY_NINJAS },
    }
  )
  return response.data
}
