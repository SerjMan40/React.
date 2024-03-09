const API_URL = 'https://jsonplaceholder.typicode.com/users1'

const fetchData = async () => {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    return data
  } catch (err) {
    throw new Error('Error fetching data')
  }
}
export default fetchData
