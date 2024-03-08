import { useState } from "react"
import randomaizer from "../utils/randomaizer"


const RandomStateful = ({min, max}) => {
  const [num, setNum] = useState(randomaizer(min, max))

  const generateRandom = () => {
    setNum(randomaizer(min, max))
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={generateRandom}>Genereted rendom</button>
    </div>
  )
}

export default RandomStateful
