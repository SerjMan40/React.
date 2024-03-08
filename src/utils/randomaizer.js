const randomaizer = (start = 0, end = 100) => {
  return Math.floor(Math.random() * (end - start + 1) + end)
}

export default randomaizer