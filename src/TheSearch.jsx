import { useState } from 'react'
import { fetchMovies } from '~/core/movie.js'
import searchStyle from '~/TheSearch.module.scss'

export default function TheSearch() {
  // 검색창에 영화 이름 입력
  const [inputText, setInputText] = useState('')
  const [movies, setMovies] = useState([])

  async function pressEnter(event) {
    if (event.key === 'Enter') {
      const movieList = await fetchMovies(inputText)
      setMovies(movieList)
    }
  }

  async function clickBtn(event) {
    if (event.value === true) {
      const movieList = await fetchMovies(inputText)
      setMovies(movieList)
    }
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
              type="text"
              placeholder="영화 이름을 검색 해보세요! (e.g. Parasite)"
              value={inputText}
              onChange={event => {
                setInputText(event.target.value)
              }}
              onKeyDown={pressEnter}
            />
            <button
              className={searchStyle.btn}
              type="button"
              onClick={clickBtn}>
              🔍
            </button>
          </div>

          <div className={searchStyle.list}>
            <ul>
              {movies.map(movie => (
                <li key={movie.imdbID}>
                  <div className={searchStyle.listEl}>
                    <img
                      src={movie.Poster}
                      className={searchStyle.listPoster}
                    />
                    <div className={searchStyle.listTitle}>{movie.Title}</div>
                    <div className={searchStyle.listYear}>({movie.Year})</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
