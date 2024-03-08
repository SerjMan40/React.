import {useState} from 'react'
import ButtonStateless from './/components/Button.jsx'
import RandomStateful from './components/Random.jsx'
import randomColor from './utils/randomColor.js'

const App = () => {
  const [buttonColor, setButtonColor] = useState('blue')

  const changeButtonColor = () => {
    setButtonColor(randomColor)
  }

  return (
    <div className='button-container'>
      <ButtonStateless color={buttonColor} onClick={changeButtonColor} />
      <RandomStateful min={0} max={100} />
    </div>
  )
}

export default App
