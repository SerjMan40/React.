import Button from './/components/Button.jsx'

const App  = () => {
  const handleClick = () => {
    console.log('Button clicked')
  }
  return (
    <div>
      <Button text='Submit button' onClick={handleClick} />
      <Button text='Reset botton' />
      <Button text='Button text' onClick={handleClick} />
    </div>
  )
}

export default App
