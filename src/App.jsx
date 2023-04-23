import { useState } from 'react'
import './App.scss'
import TheHeader from './TheHeader'
import TheSearch from './TheSearch'
import TheFooter from './TheFooter'
import TheAbout from './TheAbout'

export default function App() {
  const [count, setCount] = useState(0)

  async function getMovies(title, year = '', page = 1) {
    const s = `&s=${title}`
    const y = `&y=${year}`
    const p = `&page=${page}`
    try {
      const res = await fetch(
        `https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`
      )
      const json = await res.json()
      if (json.Response === 'True') {
        const { Search: movies, totalResults } = json
        return {
          movies,
          totalResults
        }
      }
      return json.Error
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <TheHeader />
      <TheSearch />
      <TheFooter />
    </>
  )
}
