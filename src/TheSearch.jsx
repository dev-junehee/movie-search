import searchStyle from './TheSearch.module.scss'

export default function TheSearch() {
  return (
    <>
      <main>
        <div className={searchStyle.inner}>
          <div className={searchStyle.search}>
            <input
              className={searchStyle.input}
              type="text"
              placeholder=" e.g. Parasite"
            />
            <button className={searchStyle.btn}>🔍</button>
          </div>

          <div className={searchStyle.list}></div>
        </div>
      </main>
    </>
  )
}
