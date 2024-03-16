import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/about')
  }

  return (
    <div>
      <h1>Це домашня сторінка</h1>
      <button className='btn btn-primary' onClick={handleClick}>
        Go to About
      </button>
    </div>
  )
}

export default Home
