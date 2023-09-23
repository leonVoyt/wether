import { AiFillCloud } from 'react-icons/ai'
import { MdOutlineThunderstorm } from 'react-icons/md'
import { BsCloudRainHeavy } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
import { BsFillCloudHaze2Fill } from 'react-icons/bs'
import { AiOutlineQuestion } from 'react-icons/ai'
export const WeatherType = ({ weatherType, ...props }) => {
  //   console.log(props)
  let WeatherIcon = null
  const type = {
    Clear: BsSun,
    Clouds: AiFillCloud,
    Rain: BsCloudRainHeavy,
    Thunderstorm: MdOutlineThunderstorm,
    Haze: BsFillCloudHaze2Fill,
    Mist: BsFillCloudHaze2Fill,
  }
  if (type[weatherType]) {
    WeatherIcon = type[weatherType]
  } else {
    WeatherIcon = AiOutlineQuestion
  }
  return <WeatherIcon color="white" size="30" {...props} />
}
