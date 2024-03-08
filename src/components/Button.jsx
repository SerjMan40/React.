const ButtonStateless = ({color, onClick}) => {
  return (
    <button style={{backgroundColor: color}} onClick={onClick}>
      Chenge color
    </button>
  )
}

export default ButtonStateless
