import UncontrolledForm from './components/UncontrolledForm'
import ControlledForm from './components/ControlledForm'
import UsersData from './components/UsersData'

const App = () => {
  return (
    <div className='container'>
      <div>
        <h1>Controlled Form</h1>
        <ControlledForm />
      </div>

      <div className='mt-2'>
        <h1>Uncontroled Form</h1>
        <UncontrolledForm />
      </div>

      <div className='mt-2'>
        <h1>User List</h1>
        <UsersData />
      </div>
    </div>
  )
}

export default App
