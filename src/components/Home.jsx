import {useContext} from 'react'
import {PropContext} from '../App'

const Home = () => {
  const propValue = useContext(PropContext)
  return (
    <div className='mt-4'>
      <h1>Це домашня сторінка</h1>
      <p>{propValue}</p>
    </div>
  )
}

export default Home
