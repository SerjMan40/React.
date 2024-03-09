const UncontrolledForm = () => {
  const handlerFormSubmit = (e) => {
    e.preventDefault()
    const target = e.target
    console.log(target.username.value)
    console.log(target.passworld.value)
  }
  return (
    <div>
      <form onSubmit={handlerFormSubmit} className='col-4'>
        <div className='mb-3'>
          <label className='form-label' htmlFor=''>
            UserName
          </label>
          <input
            className='form-control'
            id='username'
            name='username'
            type='text'
            placeholder='UserName'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor=''>
            Passworld
          </label>
          <input
            className='form-control'
            id='passworld'
            name='passworld'
            type='text'
            placeholder='Passworld'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UncontrolledForm
