import {useEffect, useState} from 'react'
import fetchData from '../utils/api'

const UsersData = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fatchDataAndHandleErrors = async () => {
      try {
        setIsLoading(true)
        const data = await fetchData()
        setUsers(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fatchDataAndHandleErrors()
  }, [])
  return (
    <div>
      {isLoading && <h4 className='mb-2'>Loading...</h4>}
      {error && <p className='text-danger fs-4'>Error: {error.message}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersData
