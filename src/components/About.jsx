import {useContext} from 'react'
import {PropContext} from '../App'


const About = () => {  
  const propValue = useContext(PropContext)
  return (
    <div className='mt-4'>
      <h1>Це сторінка про нас</h1>
      <p>{propValue}</p>
    </div>
  )
}

export default About
