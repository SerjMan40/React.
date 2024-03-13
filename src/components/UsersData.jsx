import {useEffect, useState} from 'react'
import axiosData from '../utils/api'

const UsersData = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const axiosDataAndHandleErrors = async () => {
      try {
        setIsLoading(true)
        const data = await axiosData()
        setUsers(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }
    axiosDataAndHandleErrors()
  }, [])

  const handleUserClick = (user) => {
    setSelectedUser(user)
    setShowDetails(true)
  }

  const handleBackButtonClick = () => {
    setSelectedUser(null)
    setShowDetails(false)
  }

  return (
    <div>
      {isLoading && <h4 className='mb-2'>Loading...</h4>}
      {error && <p className='text-danger fs-4'>Error: {error.message}</p>}
      {selectedUser && showDetails ? (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>UserName: {selectedUser.username}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
          <button
            onClick={handleBackButtonClick}
            className='btn btn-primary mb-3'
          >
            Back
          </button>
        </div>
      ) : (
        <ul className='list-group col-sm-4'>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => handleUserClick(user)}
              className='list-group-item list-group-item-action'
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsersData
