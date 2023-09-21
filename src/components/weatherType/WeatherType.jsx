import { AiFillCloud } from 'react-icons/ai'
import { MdOutlineThunderstorm } from 'react-icons/md'
import { BsCloudRainHeavy } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'

export const WeatherType = ({ weatherType, ...props }) => {
  //   console.log(props)
  const type = {
    Clear: BsSun,
    Clouds: AiFillCloud,
    Rain: BsCloudRainHeavy,
    Thunderstorm: MdOutlineThunderstorm,
  }
  const WeatherIcon = type[weatherType]
  return <WeatherIcon color="white" size="30" {...props} />
}
