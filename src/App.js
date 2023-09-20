import { useEffect, useState } from 'react'
import {
  getWether,
  getCity,
  Fetching,
  test,
  FetchingEightDays,
  sss,
} from './API/WetherService'
import './styles/Global.css'
function App() {
  const [value, setValue] = useState('')

  const handleClick = () => {
    FetchingEightDays(value).then((data) => console.log(data))
    setValue('')
  }
  useEffect(() => {
    // getCity('donetsdsadk').then((data) => console.log(data))
    // getWether().then((data) => console.log(data))
    // Fetching().then((data) => console.log(data))
    // test('KiEv').then((data) => console.log(data))
    // console.log(Date.now())
    // Fetching().then((data) => console.log(data))
    FetchingEightDays('lviv').then((data) => console.log(data))
    // sss().then((data) => console.log(data))
  }, [])
  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleClick()}>Set</button>
      <WetherCard />
    </div>
  )
}

export default App
