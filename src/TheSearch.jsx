import { useState } from 'react'
import { fetchMovies } from '~/core/movie.js'
import { getMovie } from '~/core/movieInfo.js'
import searchStyle from '~/TheSearch.module.scss'

export default function TheSearch() {
  // 검색창에 영화 이름 입력
  const [inputText, setInputText] = useState('')
  const [movies, setMovies] = useState([])
  // Enter
  async function pressEnter(event) {
    if (event.key === 'Enter') {
      if (!inputText.trim()) return
      if (inputText.trim() === undefined) {
        alert('영화 제목을 입력해 주세요!')
      }
      const movieList = await fetchMovies(inputText)
      setMovies(movieList)
    }
  }
  // Mouse click
  async function clickBtn() {
    if (!inputText.trim()) return
    if (inputText === '') {
      console.log(alert('영화 제목을 입력해 주세요!'))
    }
    const movieList = await fetchMovies(inputText)
    setMovies(movieList)
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
            <ul className={searchStyle.listContainer}>
              {movies.map(movie => (
                <li
                  key={movie.imdbID}
                  className={searchStyle.listEl}>
                  <img
                    src={movie.Poster}
                    className={searchStyle.listPoster}
                  />
                  <div className={searchStyle.listTitle}>{movie.Title}</div>
                  <div className={searchStyle.listYear}>({movie.Year})</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
