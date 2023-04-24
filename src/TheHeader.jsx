import headerStyle from '~/TheHeader.module.scss'

export default function TheHeader() {
  return (
    <>
      <header>
        <div className={headerStyle.inner}>
          <h1 className={headerStyle.title}>🎬 OMDb API</h1>
          <div className={headerStyle.about}>MY</div>
        </div>
      </header>
    </>
  )
}
