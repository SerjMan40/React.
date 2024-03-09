import {useState} from 'react'

const initialFormData = {
  username: '',
  passworld: '',
}

const ControlledForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handlerFormSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handlerInputChenge = (fieldName, fieldValue) =>
    setFormData({...formData, [fieldName]: fieldValue})

  return (
    <div>
      <form onSubmit={handlerFormSubmit} className='col-4'>
        <div className='mb-3'>
          <label className='form-label' htmlFor='username'>
            UserName
          </label>
          <input
            className='form-control'
            id='username'
            name='username'
            type='text'
            placeholder='UserName'
            value={formData.username}
            onChange={(e) => handlerInputChenge('username', e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='passworld'>
            Passworld
          </label>
          <input
            className='form-control'
            id='passworld'
            name='passworld'
            type='text'
            placeholder='Passworld'
            value={formData.passworld}
            onChange={(e) => handlerInputChenge('passworld', e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ControlledForm
