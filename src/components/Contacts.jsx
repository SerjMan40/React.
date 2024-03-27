import {useContext} from 'react'
import {PropContext} from '../App'

const Contacts = () => {
  const propValue = useContext(PropContext)
  return <div>
    <h1 className='mt-4'>Це контактна сторінка</h1>
    <p>{propValue}</p>
  </div>
}

export default Contacts