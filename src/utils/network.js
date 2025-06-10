const API = 'https://swapi.py4e.com/api/'
const PEOPLE = 'people'

export const getApiData = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Запрос не прошел', res.status)
      return false
    }

    return await res.json()
  } catch (error) {
    console.error('Запрос не прошел', error.message)
    return false
  }
}

(async () => {
  const body = await getApiData(API + PEOPLE);
  console.log(body);
})()