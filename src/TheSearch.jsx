import { useState } from 'react'
import searchStyle from '~/TheSearch.module.scss'

export default function TheSearch() {
  // 영화 API 연결
  async function fetchMovies() {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=frozen`, {
      method: 'GET'
    })
    const json = await res.json()
    console.log(json.Search)
  }
  fetchMovies()

  // 검색창에 영화 이름 입력
  const [movieName, setMovieName] = useState('')

  function getMovieName(event) {
    setMovieName(event.target.value)
  }

  return (
    <>
      <main>
        <div className={searchStyle.inner}>
          <div className={searchStyle.selects}>
            <select className={searchStyle.amount}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <select className={searchStyle.year}>
              <option value="all">All Years</option>
              <option value="2020">2020</option>
              <option value="2010">2010</option>
              <option value="2000">2000</option>
              <option value="1990">1990</option>
              <option value="1980">1980</option>
            </select>
          </div>
          <div className={searchStyle.search}>
            <input
              className={searchStyle.input}
              type="search"
              placeholder="영화 이름을 검색 해보세요! (e.g. Parasite)"
              value={movieName}
              onChange={getMovieName}
            />
            <button
              className={searchStyle.btn}
              type="button">
              🔍
            </button>
          </div>

          <div className={searchStyle.list}></div>
        </div>
      </main>
    </>
  )
}
